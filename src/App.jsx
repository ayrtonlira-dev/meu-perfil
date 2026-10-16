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
  const cover = project.images[0];
  return <div className={`project-art art-${project.id}`} aria-hidden="true">
    <img className="project-cover" src={cover.src} alt="" loading="lazy" width={cover.width} height={cover.height} />
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
      <img src={currentImage.src} alt={currentImage.alt} width={currentImage.width} height={currentImage.height} />
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
      {project.status && <p className="project-status">{project.status}</p>}
      {project.context && <p className="project-context">{project.context}</p>}
      {project.images && <ProjectGallery images={project.images} name={project.name} />}
      <h3>Minha contribuição</h3><p>{project.role}</p>
      {project.assistance && <div className="assistance-note"><h3>Uso de IA neste projeto</h3><p>{project.assistance}</p></div>}
      <h3>O que foi construído</h3>
      <ul>{project.details.map(detail => <li key={detail}><Icon name="check" size={17} /><span>{detail}</span></li>)}</ul>
      {project.caseStudy && <section className="case-study" aria-labelledby="case-study-title">
        <span className="eyebrow">ESTUDO DE CASO</span>
        <h3 id="case-study-title">{project.caseStudy.title}</h3>
        {project.caseStudy.steps.map((step, index) => <div className="case-step" key={step.title}>
          <span className="case-step-number" aria-hidden="true">0{index + 1}</span>
          <div><h4>{step.title}</h4><p>{step.text}</p></div>
        </div>)}
        {project.caseStudy.endpoint && <div className="endpoint-note">
          <code>{project.caseStudy.endpoint}</code>
          <ol className="request-flow">{project.caseStudy.flow.map(step => <li key={step}>{step}</li>)}</ol>
        </div>}
      </section>}
      <div className="learning-note"><Icon name="cap" /><div><h3>O que levo desse projeto</h3><p>{project.learning}</p></div></div>
      {project.website
        ? <ExternalLink href={project.website} className="button button-primary">Visitar site <Icon name="diagonal" size={17} /></ExternalLink>
        : project.repository
        ? <ExternalLink href={project.repository} className="button button-primary"><Icon name="github" size={18} /> Explorar repositório <Icon name="diagonal" size={17} /></ExternalLink>
        : <p className="development-note">Produto em desenvolvimento. As capturas mostram a aplicação no ambiente local.</p>}
    </div>
  </dialog>;
}

const navigation = [{ id: 'projetos', label: 'Projetos' }, { id: 'sobre', label: 'Sobre mim' }, { id: 'tecnologias', label: 'Na prática' }];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('ayrton-portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
  });
  const menuButton = useRef(null);
  const projectTrigger = useRef(null);
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
      const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
      setActiveSection(current?.id || 'inicio');
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
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
    </header>

    <main id="conteudo">
      <section id="inicio" className="hero container">
        <div className="hero-copy">
          <p className="availability">EM BUSCA DE ESTÁGIO FULLSTACK</p>
          <p className="hero-intro">Olá, eu sou Ayrton Lira</p>
          <h1>Conheça um pouco mais sobre mim</h1>
          <p className="hero-description">Estudo ADS na <strong>UNINASSAU</strong>. No GAMERBOXX, desenvolvo interfaces, integro a API e contribuí com um endpoint para consulta de jogos. No Studio Car Recife, identifiquei a falta de um site e conduzi a entrega até a publicação.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Ver projetos e contribuições <Icon name="down" size={18} /></a>
            <a href={profile.resume} download className="button button-secondary">Baixar currículo <Icon name="down" size={16} /></a>
          </div>
          <div className="hero-meta"><span><Icon name="pin" size={15} /> Recife, PE</span><span className="meta-divider" /><ExternalLink href={profile.github}><Icon name="github" size={16} /> GitHub</ExternalLink><ExternalLink href={profile.linkedin}><Icon name="linkedin" size={16} /> LinkedIn</ExternalLink></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={portrait} alt="Ayrton Lira" fetchPriority="high" /></div>
        </div>
      </section>

      <section id="projetos" className="projects-section section">
        <div className="container">
          <div className="section-heading heading-with-aside">
            <div><span className="eyebrow"><span>01 /</span> PROJETOS EM DESTAQUE</span><h2>O que estou<br />construindo.</h2></div>
            <p>Contexto, minha participação<br />e decisões de cada projeto.</p>
          </div>
          <div className="featured-projects">
            {featuredProjects.map(project => <article className="project-card featured-project" key={project.id} id={project.id}>
              <button className="project-art-button" onClick={event => openProject(project, event)} aria-label={`Ver telas do projeto ${project.name}`}><ProjectArt project={project} /><span className="project-open"><Icon name="diagonal" size={20} /></span></button>
              <div className="project-info">
                <div className="project-type"><span className="project-status">{project.status}</span><span>{project.number}</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="contribution-summary"><h4>Minha participação</h4><p>{project.contribution}</p></div>
                <button className="project-detail-link" onClick={event => openProject(project, event)}>Ver estudo de caso <Icon name="arrow" size={17} /><span className="sr-only"> {project.name}</span></button>
                {project.website && <ExternalLink href={project.website} className="project-site-link">Visitar site <Icon name="diagonal" size={17} /><span className="sr-only"> {project.name}</span></ExternalLink>}
              </div>
            </article>)}
          </div>
          <div className="other-projects-heading"><h3>Outros projetos e estudos</h3><ExternalLink href={profile.github} className="text-link">Ver GitHub <Icon name="diagonal" size={16} /></ExternalLink></div>
          <div className="other-projects">
            {otherProjects.map(project => <article className="study-card" key={project.id} id={project.id}>
              <span className="eyebrow">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="study-actions"><button className="text-link" onClick={event => openProject(project, event)}>Ver detalhes <span className="sr-only">de {project.name}</span><Icon name="arrow" size={16} /></button><ExternalLink href={project.repository} className="text-link">Código <span className="sr-only">de {project.name}</span><Icon name="diagonal" size={16} /></ExternalLink></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="sobre" className="section container about-section">
        <div className="section-heading"><span className="eyebrow"><span>02 /</span> SOBRE MIM</span><h2>De Recife,<br /><span>estudando e desenvolvendo.</span></h2></div>
        <div className="about-layout">
          <div className="about-story">
            <p>Curso <strong>Análise e Desenvolvimento de Sistemas na UNINASSAU</strong> e busco meu primeiro estágio em desenvolvimento fullstack.</p>
            <p>No <strong>GAMERBOXX</strong>, trabalho nas interfaces, na integração com a API e contribuí com um endpoint no backend, com orientação de um amigo engenheiro de software sênior. Nosso objetivo é transformar o projeto em um produto.</p>
            <p>No <strong>Studio Car Recife</strong>, Identifiquei a necessidade, defini o conteúdo com o cliente e conduzi a entrega do site, incluindo domínio, Cloudflare e publicação.</p>
            <a className="text-link" href="#contato">Entrar em contato <Icon name="arrow" size={18} /></a>
          </div>
          <div className="about-facts">
            <div className="fact-row"><div><small>FORMAÇÃO EM ANDAMENTO</small><h3>Análise e Desenvolvimento<br />de Sistemas</h3><p>UNINASSAU</p></div></div>
            <div className="fact-row"><div><small>FOCO ATUAL</small><h3>Desenvolvimento fullstack</h3><p>Interfaces, integração com APIs e desenvolvimento de endpoints</p></div></div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="section container skills-section">
        <div className="section-heading"><span className="eyebrow"><span>03 /</span> TECNOLOGIAS NA PRÁTICA</span><h2>Onde aplico<br />o que estudo.</h2></div>
        <div className="applied-skills">
          {skills.map(item => <article className="applied-skill" key={item.name}>
            <div className="skill-icons">{item.icons.map(name => <Icon key={name} name={name} size={28} />)}</div><h3>{item.name}</h3><p>{item.description}</p><a className="text-link" href={`#${item.project}`}>{item.evidence}<Icon name="arrow" size={15} /><span className="sr-only">: {item.name}</span></a>
          </article>)}
        </div>
      </section>

      <section id="contato" className="contact-section section">
        <div className="container contact-inner"><span className="eyebrow"><span>04 /</span> CONTATO</span><h2>Vamos conversar<br />sobre uma oportunidade?</h2><p>Busco <strong>estágio em desenvolvimento fullstack</strong>.<br />Posso apresentar as interfaces, as integrações e o endpoint que implementei no GAMERBOXX.</p><div className="contact-actions"><ExternalLink className="button button-primary" href={profile.linkedin}><Icon name="linkedin" size={19} /> LinkedIn <Icon name="diagonal" size={18} /></ExternalLink><a className="button button-secondary" href={`mailto:${profile.email}`}>{profile.email}</a><a className="button button-secondary" href={profile.resume} download>Baixar currículo <Icon name="down" size={16} /></a></div><div className="contact-note"><Icon name="pin" size={15} /> Recife, PE · Brasil</div></div>
      </section>
    </main>
    <footer className="container site-footer"><a className="brand" href="#inicio" aria-label="Voltar ao início">al<span>.</span></a><p>© {new Date().getFullYear()} Ayrton Lira <span>·</span> React + Vite ·</p><a href="#inicio" className="back-top">De volta ao topo <Icon name="arrow" size={16} /></a></footer>
    {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>;
}
