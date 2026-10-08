import { useEffect, useRef, useState } from 'react';
import portrait from '../assets/minha-foto.jpg';
import { profile, projects, skills } from './data';

function Icon({ name, size = 20, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
    down: <><path d="M12 4v16m-6-6 6 6 6-6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" /></>,
    cap: <><path d="m2 9 10-5 10 5-10 5-10-5Zm4 3v5c3 3 9 3 12 0v-5M22 9v7" /></>,
    github: <><path d="M9 19c-4.5 1.5-4.5-2-6-2m12 5v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.9A5.4 5.4 0 0 0 18.8 5 5 5 0 0 0 18.7 1S17.5.7 15 2.5a13.3 13.3 0 0 0-7 0C5.5.7 4.3 1 4.3 1A5 5 0 0 0 4.2 5a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.6V22" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    react: <><ellipse cx="12" cy="12" rx="11" ry="4" /><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1" fill="currentColor" /></>,
    python: <><path d="M12 3H8a3 3 0 0 0-3 3v3h8v3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3m4 1h4a3 3 0 0 0 3-3v-3h-8v-3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-3" /><path d="M8 6h.01M16 18h.01" strokeWidth="3" /></>,
    git: <><rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" /><path d="M9 5v10m0-7 6 6" /><circle cx="9" cy="15" r="1" /><circle cx="15" cy="14" r="1" /></>,
    html: <><path d="m4 3 1.5 16L12 21l6.5-2L20 3H4Zm12 4H8l.5 4H15l-.5 5-2.5 1-2.5-1-.2-2" /></>,
    css: <><path d="m4 3 1.5 16L12 21l6.5-2L20 3H4Zm4 4h8l-.5 4H9m6.5 0-.5 5-3 1-2.5-1-.2-2" /></>,
    javascript: <><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M11 8v7c0 3-4 3-4 0m12-6c-4-3-6 2-3 3s4 2 2 4c-1 1-3 1-4-1" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.code}</svg>;
}

function ExternalLink({ href, children, className = '', ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}<span className="sr-only"> (abre em nova aba)</span></a>;
}

function ProjectArt({ project }) {
  const kind = project.id;
  return <div className={`project-art art-${kind}`} aria-hidden="true">
    <div className="art-grid" />
    {project.images && <div className="screenshot-window">
      <div className="window-bar"><span><i /><i /><i /></span><small>{project.name}</small><span className="screenshot-count">{project.images.length} telas</span></div>
      <img src={project.images[0].src} alt="" loading="lazy" width={project.images[0].width || 1898} height={project.images[0].height || 914} />
    </div>}
    {kind === 'market' && <div className="market-window">
      <div className="window-bar"><span><i /><i /><i /></span><small>market.py</small><Icon name="code" size={14} /></div>
      <div className="market-code"><span className="code-comment"># ideias em movimento</span><br /><span className="code-purple">class</span> <span className="code-yellow">Mercado</span>:<br />&nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-yellow">adicionar</span>(self, produto):<br />&nbsp;&nbsp;&nbsp;&nbsp;self.estoque.append(produto)<br /><br /><span className="code-comment"># simples. organizado. funcional.</span></div>
      <div className="market-success"><span><Icon name="check" size={15} /> Compra finalizada</span><small>Python + Tkinter</small></div>
    </div>}
    {kind === 'portfolio' && <div className="portfolio-window">
      <div className="mini-nav"><b>al<span>.</span></b><span>sobre &nbsp; projetos &nbsp; contato</span></div>
      <div className="mini-portfolio"><div><small>OLÁ, EU SOU AYRTON</small><strong>Ideias.<br />Código.<br /><em>Possibilidades.</em></strong><span className="mini-button">Conheça meu trabalho ↗</span></div><div className="mini-photo"><img src={portrait} alt="" loading="lazy" /></div></div>
      <div className="mini-bottom">REACT <span>✳</span> CSS <span>✳</span> JAVASCRIPT</div>
    </div>}
    <span className="art-caption">{project.images ? 'CAPTURA REAL · PÁGINA INICIAL' : `CONCEITO VISUAL · ${kind === 'market' ? 'LÓGICA & SOLUÇÕES' : 'DESIGN & DESENVOLVIMENTO'}`}</span>
  </div>;
}

function ProjectGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = images[activeImage];

  function changeImage(direction) {
    setActiveImage(index => (index + direction + images.length) % images.length);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return <section className="project-gallery" aria-label={`Galeria de telas do ${name}`} onKeyDown={handleKeyDown}>
    <figure className="gallery-figure">
      <img src={currentImage.src} alt={currentImage.alt} />
      <figcaption aria-live="polite" aria-atomic="true"><span>{currentImage.label}</span><span>{activeImage + 1} / {images.length}</span></figcaption>
    </figure>
    <div className="gallery-thumbnails" role="group" aria-label="Selecionar tela do projeto">
      {images.map((item, index) => <button key={item.src} onClick={() => setActiveImage(index)} aria-pressed={activeImage === index} aria-label={`Mostrar imagem ${index + 1}: ${item.label}`}>
        <img src={item.src} alt="" loading="lazy" />
        <span>{item.label}</span>
      </button>)}
    </div>
    <div className="gallery-controls">
      <ExternalLink href={currentImage.src} className="text-link">Abrir imagem original <Icon name="diagonal" size={15} /></ExternalLink>
      <div><button className="icon-button gallery-previous" aria-label="Imagem anterior" onClick={() => changeImage(-1)}><Icon name="arrow" size={18} /></button><button className="icon-button" aria-label="Próxima imagem" onClick={() => changeImage(1)}><Icon name="arrow" size={18} /></button></div>
    </div>
  </section>;
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={ref} className={`project-dialog${project.images ? ' has-gallery' : ''}`} aria-labelledby="project-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-content">
      <button autoFocus className="icon-button dialog-close" onClick={onClose} aria-label="Fechar detalhes do projeto"><Icon name="close" /></button>
      <span className="eyebrow">PROJETO {project.number} / {project.category.toUpperCase()}</span>
      <h2 id="project-title">{project.name}<span>.</span></h2>
      <p className="dialog-subtitle">{project.subtitle}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.images && <ProjectGallery images={project.images} name={project.name} />}
      <h3>Minha contribuição</h3><p>{project.role}</p>
      <h3>O que foi construído</h3>
      <ul>{project.details.map(detail => <li key={detail}><Icon name="check" size={17} /><span>{detail}</span></li>)}</ul>
      <div className="learning-note"><Icon name="cap" /><div><h3>O que levo desse projeto</h3><p>{project.learning}</p></div></div>
      {project.website
        ? <ExternalLink href={project.website} className="button button-primary">Visitar site <Icon name="diagonal" size={17} /></ExternalLink>
        : project.repository
        ? <ExternalLink href={project.repository} className="button button-primary"><Icon name="github" size={18} /> Explorar repositório <Icon name="diagonal" size={17} /></ExternalLink>
        : <ExternalLink href={profile.linkedin} className="button button-primary"><Icon name="linkedin" size={18} /> Conversar sobre este projeto <Icon name="diagonal" size={17} /></ExternalLink>}
    </div>
  </dialog>;
}

const navigation = [{ id: 'sobre', label: 'Sobre mim' }, { id: 'projetos', label: 'Projetos' }, { id: 'tecnologias', label: 'Tecnologias' }];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('ayrton-portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
  });
  const menuButton = useRef(null);
  const projectTrigger = useRef(null);
  const skill = skills[selectedSkill];
  const visibleProjects = projects.filter(project => filter === 'Todos' || project.category === filter);

  function openProject(project, event) {
    projectTrigger.current = event.currentTarget;
    setSelectedProject(project);
  }

  useEffect(() => {
    if (!selectedProject) projectTrigger.current?.focus({ preventScroll: true });
  }, [selectedProject]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141816' : '#f4f5ef';
    try { localStorage.setItem('ayrton-portfolio-theme', theme); } catch { /* The theme also works without storage. */ }
  }, [theme]);

  useEffect(() => {
    let frame;
    const sections = [...document.querySelectorAll('main > section[id]')];
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', `${total > 0 ? window.scrollY / total * 100 : 0}%`);
      const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
      setActiveSection(current?.id || 'inicio');
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Ayrton Lira, início" onClick={() => setMenuOpen(false)}>al<span>.</span><span className="brand-name">AYRTON LIRA</span></a>
        <nav id="main-navigation" aria-label="Navegação principal" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a href="#contato" className="nav-contact" aria-current={activeSection === 'contato' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>Vamos conversar <Icon name="diagonal" size={15} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} /></button>
          <button ref={menuButton} className="icon-button menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
      </div>
      <div className="scroll-progress" />
    </header>

    <main id="conteudo">
      <section id="inicio" className="hero container">
        <div className="hero-copy">
          <p className="hero-intro">Olá, eu sou Ayrton Lira <span className="hello-spark">✳</span></p>
          <h1>Curiosidade<br />que se transforma<br />em <em>código.</em><span className="heading-star" aria-hidden="true">✳</span></h1>
          <p className="hero-description">Estudante de Análise e Desenvolvimento de Sistemas na <strong>UNINASSAU</strong>, com foco em <strong>front-end</strong>. Construindo interfaces, aprendendo na prática e dando vida a novas ideias.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projetos">Conheça meus projetos <Icon name="diagonal" size={18} /></a><ExternalLink href={profile.linkedin} className="button button-secondary"><Icon name="linkedin" size={18} /> LinkedIn</ExternalLink></div>
          <div className="hero-meta"><span><Icon name="pin" size={15} /> Recife, PE · Brasil</span><span className="meta-divider" /><ExternalLink href={profile.github}><Icon name="github" size={16} /> @ayrtonlira-dev <Icon name="diagonal" size={12} /></ExternalLink></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-orbit" aria-hidden="true" /><span className="portrait-cross" aria-hidden="true">+</span>
          <div className="portrait-frame"><img src={portrait} alt="Ayrton Lira, estudante e desenvolvedor, sorrindo" fetchPriority="high" /><div className="portrait-shade" /><span className="portrait-top">EM CONSTANTE EVOLUÇÃO <span>↗</span></span><div className="portrait-caption"><span>Desenvolvedor em formação</span><strong>Ayrton Lira</strong></div></div>
          <div className="code-note"><div className="code-note-icon"><Icon name="code" size={23} /></div><div><span>Um pouco de lógica.</span><strong>Um mundo de possibilidades.</strong></div><span className="note-dot" /></div>
          <span className="photo-side-label">APRENDER. CONSTRUIR. EVOLUIR.</span>
        </div>
        <a href="#sobre" className="scroll-hint"><span>UM POUCO MAIS SOBRE MIM</span><Icon name="down" size={16} /></a>
      </section>

      <div className="technology-strip" aria-label="Tecnologias: React, JavaScript, HTML, CSS e Git"><div className="container strip-inner"><span className="strip-label">IDEIAS CONSTRUÍDAS COM</span>{skills.map(item => <span className="strip-tech" key={item.name}><Icon name={item.icon} size={20} />{item.name}</span>)}</div></div>

      <section id="sobre" className="section container about-section">
        <div className="section-heading reveal"><span className="eyebrow"><span>01 /</span> SOBRE MIM</span><h2>Mais do que código.<br /><span>Vontade de construir.</span></h2></div>
        <div className="about-layout reveal">
          <div className="about-story"><p>Sou Ayrton, de Recife. Gosto de entender como as coisas funcionam — e de transformar esse aprendizado em algo que outras pessoas possam usar.</p><p>Curso <strong>Análise e Desenvolvimento de Sistemas na UNINASSAU</strong> e concentro meus estudos em <strong>desenvolvimento front-end</strong>. Entre interfaces em React, layouts responsivos e integração com APIs, vou conectando teoria e prática.</p><p>Meu foco é construir <strong>interfaces intuitivas e bem estruturadas</strong>, com atenção à experiência de quem usa. Já aplico esse cuidado em trabalhos freelance, como o site do <strong>Studio Car Recife</strong>, enquanto sigo trocando conhecimento e evoluindo.</p><a className="text-link" href="#contato">Vamos construir algo juntos <Icon name="arrow" size={18} /></a></div>
          <div className="about-facts"><div className="fact-row"><div className="fact-icon"><Icon name="cap" size={23} /></div><div><small>FORMAÇÃO EM ANDAMENTO</small><h3>Análise e Desenvolvimento<br />de Sistemas</h3><p>UNINASSAU</p></div><span className="fact-index">01</span></div><div className="fact-row"><div className="fact-icon"><Icon name="code" size={23} /></div><div><small>ONDE COLOCO A MÃO NA MASSA</small><h3>Front-end & desenvolvimento web</h3><p>React, interfaces responsivas e integração com APIs</p></div><span className="fact-index">02</span></div><div className="learning-line"><span className="status-dot" /><p>Aprendendo na prática, um projeto de cada vez.</p></div></div>
        </div>
      </section>

      <section id="projetos" className="projects-section section">
        <div className="container">
          <div className="section-heading heading-with-aside reveal"><div><span className="eyebrow"><span>02 /</span> PROJETOS SELECIONADOS</span><h2>Aprendizado que<br />ganhou <em>forma.</em></h2></div><p>Cada projeto, um novo desafio.<br />Cada desafio, um passo à frente.</p></div>
          <div className="projects-toolbar"><div className="project-filters" role="group" aria-label="Filtrar projetos por área">{['Todos', 'Front-end', 'Estudos'].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'Todos' ? projects.length : projects.filter(project => project.category === item).length.toString().padStart(2, '0')}</span></button>)}</div><ExternalLink href={profile.github} className="text-link">Ver GitHub <Icon name="diagonal" size={16} /></ExternalLink></div>
          <p className="sr-only" role="status">{visibleProjects.length} projetos exibidos</p>
          <div className={`projects-grid${visibleProjects.length === 4 ? ' projects-grid-four' : ''}`}>
            {visibleProjects.map(project => <article className="project-card" key={project.id}>
              <button className="project-art-button" onClick={event => openProject(project, event)} aria-label={`Conhecer o projeto ${project.name}`}><ProjectArt project={project} /><span className="project-open"><Icon name="diagonal" size={20} /></span></button>
              <div className="project-info"><div className="project-type"><span>{project.type}</span><span>{project.number}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="project-detail-link" onClick={event => openProject(project, event)}>Conheça o projeto <Icon name="arrow" size={17} /><span className="sr-only"> {project.name}</span></button>{project.website && <ExternalLink href={project.website} className="project-site-link">Visitar site <Icon name="diagonal" size={17} /><span className="sr-only"> {project.name}</span></ExternalLink>}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="section container skills-section">
        <div className="section-heading heading-with-aside reveal"><div><span className="eyebrow"><span>03 /</span> MINHA CAIXA DE FERRAMENTAS</span><h2>Tecnologias que<br />fazem <em>acontecer.</em></h2></div><p>O que uso para tirar ideias do papel.<br />Selecione uma tecnologia para explorar.</p></div>
        <div className="skills-grid reveal" role="group" aria-label="Explorar tecnologias">{skills.map((item, index) => <button key={item.name} className="skill-button" aria-pressed={selectedSkill === index} aria-controls="skill-description" onClick={() => setSelectedSkill(index)} style={{ '--skill-color': item.color }}><Icon name={item.icon} size={34} /><strong>{item.name}</strong><span>{selectedSkill === index ? 'EXPLORANDO' : 'EXPLORAR'} <Icon name="diagonal" size={12} /></span></button>)}</div>
        <div className="skill-description" id="skill-description" aria-live="polite" aria-atomic="true"><span className="skill-detail-icon"><Icon name={skill.icon} size={25} /></span><div><h3>{skill.label}</h3><p>{skill.description}</p></div><span className="skill-detail-number">{String(selectedSkill + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</span></div>
        <div className="currently-learning"><span>NO RADAR <Icon name="diagonal" size={13} /></span><p>Aprofundando React, acessibilidade, interfaces responsivas e integração com APIs.</p></div>
      </section>

      <section id="contato" className="contact-section section">
        <div className="container contact-inner reveal"><span className="eyebrow"><span>04 /</span> PRÓXIMO CAPÍTULO</span><h2>Boas ideias começam<br />com uma <em>conversa.</em><span aria-hidden="true">↗</span></h2><p>Tem uma oportunidade ou um projeto em mente?<br />Vou adorar conhecer e trocar uma ideia.</p><div className="contact-actions"><ExternalLink className="button button-primary" href={profile.linkedin}><Icon name="linkedin" size={19} /> Vamos conversar no LinkedIn <Icon name="diagonal" size={18} /></ExternalLink><ExternalLink className="button button-secondary" href={profile.github}><Icon name="github" size={18} /> Explore meu GitHub <Icon name="diagonal" size={17} /></ExternalLink></div><div className="contact-note"><Icon name="pin" size={15} /> De Recife, para novas possibilidades.</div></div>
      </section>
    </main>
    <footer className="container site-footer"><a className="brand" href="#inicio" aria-label="Voltar ao início">al<span>.</span></a><p>© {new Date().getFullYear()} Ayrton Lira <span>·</span> Feito com React e curiosidade.</p><a href="#inicio" className="back-top">De volta ao topo <Icon name="arrow" size={16} /></a></footer>
    {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>;
}
