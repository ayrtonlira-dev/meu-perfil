import photo from "./assets/images/profile/ayrton-lira.webp";
import cityArt from "./assets/images/art/city-dusk.png";
import roomArt from "./assets/images/art/room-night.png";

import inicio from "./assets/images/projects/myratedgames/inicio.jpg";
import inicioThumb from "./assets/images/projects/myratedgames/inicio-thumb.jpg";
import detalhes from "./assets/images/projects/myratedgames/detalhes.jpg";
import detalhesThumb from "./assets/images/projects/myratedgames/detalhes-thumb.jpg";
import listas from "./assets/images/projects/myratedgames/listas.jpg";
import listasThumb from "./assets/images/projects/myratedgames/listas-thumb.jpg";
import ordem from "./assets/images/projects/myratedgames/ordem.jpg";
import ordemThumb from "./assets/images/projects/myratedgames/ordem-thumb.jpg";
import avaliacoes from "./assets/images/projects/myratedgames/avaliacoes.jpg";
import avaliacoesThumb from "./assets/images/projects/myratedgames/avaliacoes-thumb.jpg";
import perfil from "./assets/images/projects/myratedgames/perfil.jpg";
import perfilThumb from "./assets/images/projects/myratedgames/perfil-thumb.jpg";
import comunidade from "./assets/images/projects/myratedgames/comunidade.jpg";
import comunidadeThumb from "./assets/images/projects/myratedgames/comunidade-thumb.jpg";

import studioCarInicio from "./assets/images/projects/studiocar/inicio.webp";
import studioCarInicioThumb from "./assets/images/projects/studiocar/inicio-thumb.webp";
import studioCarServicos from "./assets/images/projects/studiocar/servicos.webp";
import studioCarServicosThumb from "./assets/images/projects/studiocar/servicos-thumb.webp";

import portfolioDesktop from "./assets/images/projects/portfolio/desktop.jpg";
import portfolioDesktopThumb from "./assets/images/projects/portfolio/desktop-thumb.jpg";
import portfolioMobile from "./assets/images/projects/portfolio/mobile.jpg";
import portfolioProjectDialog from "./assets/images/projects/portfolio/projeto-aberto.jpg";

export const profile = {
  name: "Ayrton Lira",
  handle: "@ayrtonlira-dev",
  location: "Recife, Brasil",
  education: "Análise e Desenvolvimento de Sistemas",
  educationInstitution: "UNINASSAU",
  educationStatus: "em andamento",
  role: "Desenvolvedor fullstack em formação",
  focus: "React · JavaScript · Integração de APIs",
  bio: "No myratedgames, construo interfaces em React e integro a API. Também conduzi a entrega do site do Studio Car Recife.",
  availability: "Buscando estágio",
  availabilityText:
    "Busco meu primeiro estágio em desenvolvimento, com interesse em evoluir para fullstack.",
  aboutLead:
    "Curso Análise e Desenvolvimento de Sistemas na UNINASSAU e busco meu primeiro estágio em desenvolvimento fullstack.",
  interests:
    "Evoluir em desenvolvimento fullstack, com foco em interfaces e APIs.",
  locationNote:
    "Recife, Brasil. Buscando meu primeiro estágio em desenvolvimento fullstack.",
  workingStyle:
    "No myratedgames, atuo nas interfaces e na integração com a API. Também implementei um endpoint para buscar jogos por IDs. Meu amigo, engenheiro de software sênior, é o principal responsável pelo backend e me orienta no projeto.\n\nNo Studio Car Recife, identifiquei a necessidade, defini o conteúdo com o cliente e conduzi a entrega do site, incluindo domínio, Cloudflare e publicação.",
  contactIntro:
    "Busco meu primeiro estágio em desenvolvimento fullstack. Se quiser trocar ideia ou falar de uma vaga, me chama.",
  photo,
  resume: import.meta.env.BASE_URL + "curriculo-ayrton-lira.pdf",
  resumeFileName: "Ayrton-Lira-Curriculo.pdf",
  email: "ayrtonslira@gmail.com",
  github: "https://github.com/ayrtonlira-dev",
  githubLabel: "github.com/ayrtonlira-dev",
  linkedin: "https://www.linkedin.com/in/ayrton-lira-658b873b9/",
  linkedinLabel: "ayrton-lira",
};

// O bloco de atualizações só aparece quando existir conteúdo real aqui.
// Exemplo: { date: "2026-11", title: "Novo case publicado", text: "..." }
export const recentActivity = [];

export const technologies = [
  {
    id: "react",
    name: "React",
    icon: "react",
    context: "myratedgames e este portfólio.",
    shortContext: "myratedgames + portfólio",
    projects: ["myratedgames", "portfolio"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    context: "APIs no myratedgames e interações aqui.",
    shortContext: "Integração de APIs",
    projects: ["myratedgames", "portfolio"],
  },
  {
    id: "vite",
    name: "Vite",
    icon: "vite",
    context: "Build e desenvolvimento deste portfólio.",
    shortContext: "Este portfólio",
    projects: ["portfolio"],
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    icon: "web",
    context: "Estrutura e estilos deste portfólio.",
    shortContext: "Este portfólio",
    projects: ["portfolio"],
  },
  {
    id: "apis",
    name: "APIs REST",
    icon: "api",
    context: "Endpoints integrados no myratedgames.",
    shortContext: "myratedgames",
    projects: ["myratedgames"],
  },
  {
    id: "git",
    name: "Git & GitHub",
    icon: "git",
    context: "Versionamento dos projetos.",
    shortContext: "Versionamento",
    projects: ["portfolio"],
  },
];

export const projects = [
  {
    id: "myratedgames",
    featured: true,
    cardAction: "Explorar o case",
    cardTechnologies: ["React", "JavaScript", "APIs REST"],
    number: "01",
    title: "myratedgames",
    category: "Desenvolvimento web",
    status: { label: "Em produção", tone: "live" },
    tagline: "Registre, avalie e organize seus jogos.",
    cardDescription:
      "Criei interfaces em React e reduzi as requisições ao carregar as listas de jogos.",
    cardTech: "React · APIs",
    summary:
      "Plataforma colaborativa para registrar e avaliar jogos, criar listas e acompanhar a comunidade. Disponível em produção.",
    technologies: ["React", "JavaScript", "CSS", "APIs REST"],
    thumbnail: inicioThumb,
    images: [
      { src: inicio, thumb: inicioThumb, alt: "Página inicial do myratedgames com jogos em destaque.", caption: "Página inicial", description: "Destaques e acesso ao catálogo." },
      { src: detalhes, thumb: detalhesThumb, alt: "Página de Elden Ring com informações do jogo, status e avaliação.", caption: "Detalhes do jogo", description: "Ficha de Elden Ring com status, nota e ações de avaliação." },
      { src: listas, thumb: listasThumb, alt: "Visão geral das listas Must play, Souls-like e FPS Games.", caption: "Minhas listas", description: "Visão geral das listas criadas pelo usuário." },
      { src: ordem, thumb: ordemThumb, alt: "Lista ranqueada com Lies of P, Elden Ring e Sekiro nas primeiras posições.", caption: "Ordem dos jogos", description: "Seleção e reordenação dos jogos de uma lista." },
      { src: avaliacoes, thumb: avaliacoesThumb, alt: "Avaliações da comunidade com controles para revelar ou ocultar spoilers.", caption: "Avaliações", description: "Avaliações da comunidade e controle de spoilers." },
      { src: perfil, thumb: perfilThumb, alt: "Formulário de edição de nome, bio e foto do perfil.", caption: "Editar perfil", description: "Edição das informações exibidas no perfil público." },
      { src: comunidade, thumb: comunidadeThumb, alt: "Feed da comunidade com atividades de perfis seguidos.", caption: "Comunidade", description: "Atividades das pessoas que o usuário segue." },
    ],
    contribution: {
      title: "Minha atuação",
      items: [
        "Interfaces em React para catálogo, perfil, listas e estados da conta.",
        "Integração da interface com a API e adaptação aos contratos dos endpoints.",
        "Implementação do endpoint de consulta de jogos por IDs para as listas.",
      ],
    },
    caseStudy: {
      title: "Carregar os jogos de uma lista sem percorrer o catálogo",
      problem: "As listas guardavam os IDs dos jogos. Para mostrar seus nomes e imagens, a interface percorria páginas do catálogo e fazia muitas requisições.",
      implementation: "Implementei o endpoint POST /v1/games/by-ids e adaptei o frontend para consultar apenas os IDs da lista, em lotes de até 10.",
      result: "A lista passou a carregar os jogos de que precisa, preservando sua ordem. Isso reduziu as requisições e deixou o carregamento mais rápido.",
    },
    otherContribution: {
      title: "Colaboração",
      text: "Projeto desenvolvido em colaboração com um engenheiro de software sênior, responsável pelo backend e pela orientação técnica.",
    },
    implemented: [],
    links: [{ label: "Visitar o site", href: "https://myratedgames.com.br/", external: true }],
    contactSubject: "myratedgames",
  },
  {
    id: "studiocar",
    cardAction: "Conhecer a entrega",
    cardTechnologies: ["HTML / CSS", "Cloudflare"],
    number: "02",
    title: "Studio Car Recife",
    category: "Web",
    status: { label: "Publicado", tone: "live" },
    tagline: "Da oportunidade identificada ao site publicado.",
    cardDescription: "Do contato com o cliente ao site publicado.",
    cardTech: "HTML · Cloudflare",
    summary:
      "A oficina não tinha site institucional. Identifiquei a oportunidade, conversei com o cliente sobre o conteúdo e conduzi a publicação em domínio próprio. O site reúne serviços, avaliações do Google, mapa e contato.",
    technologies: ["HTML", "CSS", "Cloudflare"],
    thumbnail: studioCarInicioThumb,
    images: [
      {
        src: studioCarInicio,
        thumb: studioCarInicioThumb,
        alt: "Página inicial do Studio Car Recife, com o letreiro da oficina e chamada de orçamento.",
        caption: "Página inicial",
        description: "Apresentação da oficina, serviços e contato.",
      },
      {
        src: studioCarServicos,
        thumb: studioCarServicosThumb,
        alt: "Seção de serviços do site Studio Car Recife, com pintura, funilaria e martelinho de ouro.",
        caption: "Serviços",
        description: "Detalhamento dos serviços e chamada para orçamento.",
      },
    ],
    contribution: {
      title: "Minha atuação",
      items: [
        "Identifiquei a necessidade e defini o conteúdo com o cliente.",
        "Conduzi a entrega do site, incluindo domínio, Cloudflare e publicação.",
      ],
    },
    otherContribution: {
      title: "Implementação",
      text: "O layout e o código foram gerados com o Codex.",
    },
    implemented: [],
    links: [
      {
        label: "Visitar o site",
        href: "https://studiocarrecife.com.br/",
        external: true,
      },
    ],
    unavailableLink: "",
    contactSubject: "Studio Car Recife",
  },
  {
    id: "portfolio",
    cardAction: "Sobre este projeto",
    cardTechnologies: ["React", "Vite"],
    number: "03",
    title: "Este portfólio",
    category: "Projeto pessoal",
    status: { label: "Implementado", tone: "built" },
    tagline: "Uma proposta visual transformada em experiência navegável.",
    cardDescription: "Direção visual e experiência, com apoio de IA.",
    cardTech: "React · Vite",
    summary:
      "Meu portfólio pessoal: a direção visual aprovada virou uma aplicação em React e Vite com painéis de projeto, galeria ampliável e controle de movimento.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    thumbnail: portfolioDesktopThumb,
    images: [
      {
        src: portfolioDesktop,
        thumb: portfolioDesktopThumb,
        alt: "Tela do portfólio no desktop, com cabeçalho, vitrine em pixel art e projetos.",
        caption: "Perfil no desktop",
        description: "Visão geral do perfil, da vitrine e da biblioteca.",
      },
      {
        src: portfolioMobile,
        alt: "Tela do portfólio no mobile, com identidade, navegação e projetos em uma coluna.",
        caption: "Perfil no mobile",
        description: "A mesma experiência reorganizada em uma coluna.",
      },
      {
        src: portfolioProjectDialog,
        alt: "Painel de projeto aberto sobre o portfólio, com galeria de capturas e a ficha do myratedgames.",
        caption: "Projeto aberto",
        description: "Painel acessível com galeria, contexto e ampliação.",
      },
    ],
    contribution: {
      title: "Minha atuação",
      items: [
        "Definição da referência, do conteúdo e das decisões de interação.",
        "Validação da proposta visual e revisão dos textos do perfil.",
        "Escolha da stack React, Vite e JavaScript para a implementação.",
      ],
    },
    otherContribution: {
      title: "Apoio de implementação",
      text: "A implementação foi assistida por IA, com direção, revisão e validação minhas.",
    },
    implemented: [
      "Painel de projeto com galeria e ampliação",
      "Navegação com a seção atual indicada",
      "Contexto das tecnologias por toque ou foco",
      "Controle de movimento e respeito a movimento reduzido",
    ],
    links: [],
    unavailableLink: "",
    contactSubject: "Este portfólio",
  },
];

export const art = {
  city: cityArt,
  room: roomArt,
};
