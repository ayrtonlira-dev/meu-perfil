import studioCarHome from '../assets/studiocar/inicio.png';
import studioCarServices from '../assets/studiocar/servicos.png';
import gamerboxxCatalog from '../assets/gamerboxx/catalogo-atual.png';
import gamerboxxProfile from '../assets/gamerboxx/perfil-atual.png';
import gamerboxxEditProfile from '../assets/gamerboxx/editar-perfil-atual.png';
import gamerboxxDetails from '../assets/gamerboxx/detalhes-atual.png';

export const profile = {
  name: 'Ayrton Lira',
  github: 'https://github.com/ayrtonlira-dev',
  linkedin: 'https://www.linkedin.com/in/ayrton-lira-658b873b9/',
  email: 'ayrtonslira@gmail.com',
  resume: `${import.meta.env.BASE_URL}curriculo-ayrton-lira.pdf`,
};

export const projects = [
  {
    id: 'gamerboxx',
    number: '01',
    featured: true,
    name: 'GAMERBOXX',
    subtitle: 'Construindo um produto para quem joga.',
    category: 'Desenvolvimento web',
    type: 'Produto em desenvolvimento',
    status: 'Em desenvolvimento',
    description: 'Uma plataforma de jogos que construo com um amigo. Desenvolvo interfaces em React e integro a API para contas, perfis, busca e organização dos jogos. Também implementei um endpoint de consulta de jogos por IDs.',
    tags: ['React', 'JavaScript', 'Axios', 'CSS'],
    repository: null,
    contribution: 'Interfaces em React, integração com a API e implementação de um endpoint no backend para consultar jogos por IDs.',
    context: 'Estamos desenvolvendo um produto real, ainda sem publicação em produção. O catálogo utiliza dados da RAWG por meio do backend Newton.',
    images: [
      { src: gamerboxxDetails, label: 'Detalhes e avaliação', alt: 'Tela de Elden Ring no GAMERBOXX, com status do jogo, nota e ações de avaliação e listas.', width: 1855, height: 911 },
      { src: gamerboxxCatalog, label: 'Catálogo de jogos', alt: 'Catálogo do GAMERBOXX com capas, nomes e informações dos jogos.', width: 1831, height: 907 },
      { src: gamerboxxProfile, label: 'Perfil e diário', alt: 'Perfil no GAMERBOXX com confirmação de atualização, conexões e diário de jogos.', width: 1855, height: 910 },
      { src: gamerboxxEditProfile, label: 'Edição do perfil', alt: 'Formulário de edição de perfil do GAMERBOXX com nome, bio e imagem.', width: 1855, height: 911 },
    ],
    role: 'Sou responsável pelas interfaces e pela integração com os endpoints. Também implementei o endpoint de consulta de jogos por IDs. Meu amigo, engenheiro de software sênior, é o principal responsável pelo backend e me orienta. Uso o ambiente Docker configurado por ele para desenvolver a integração.',
    details: [
      'Criação de conta e login integrados ao backend.',
      'Consulta e edição de perfil com dados persistidos.',
      'Busca e filtros de jogos conectados ao catálogo.',
      'Páginas de jogos com status, avaliações e acesso às listas.',
    ],
    caseStudy: {
      title: 'Buscar os jogos de uma lista sem percorrer o catálogo',
      steps: [
        { title: 'O problema', text: 'As listas guardavam os IDs dos jogos, mas a interface precisava dos nomes e dos demais dados para exibi-los. Para resolver essa associação, a interface percorria páginas do catálogo, gerando requisições desnecessárias.' },
        { title: 'Minha implementação', text: 'Implementei um endpoint que recebe os IDs e devolve os jogos correspondentes. Adaptei a interface para consultar apenas os jogos presentes na lista, em lotes de até 10 IDs, conforme o contrato da API.' },
        { title: 'O que mudou', text: 'O carregamento da lista passou a depender dos IDs que ela contém. A interface associa os dados retornados a cada jogo e preserva a ordem da lista, sem precisar percorrer o catálogo.' },
      ],
      endpoint: 'POST /v1/games/by-ids',
      flow: ['IDs dos jogos da lista', 'Consulta em lotes de até 10', 'Dados associados a cada jogo'],
    },
    learning: 'Essa mudança me ajudou a entender como o contrato de uma API afeta a implementação e a quantidade de requisições da interface.',
  },
  {
    id: 'studiocar',
    number: '02',
    featured: true,
    name: 'Studio Car Recife',
    subtitle: 'Da oportunidade identificada ao site publicado.',
    category: 'Web',
    type: 'Site institucional publicado',
    status: 'Publicado',
    description: 'Percebi que uma oficina de Recife não tinha site institucional e propus a criação. Conversei com o proprietário, organizei a entrega e cuidei do domínio e do Cloudflare.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare'],
    repository: null,
    website: 'https://studiocarrecife.com.br/',
    contribution: 'Conversa com o cliente, definição do conteúdo, domínio e publicação. Layout e código gerados com o Codex.',
    context: 'A empresa não possuía um site institucional. A proposta foi reunir serviços, avaliações e localização em um endereço próprio.',
    images: [
      { src: studioCarHome, label: 'Página inicial', alt: 'Página inicial do Studio Car Recife, com apresentação da oficina e contato pelo WhatsApp.', width: 1440, height: 800 },
      { src: studioCarServices, label: 'Serviços', alt: 'Seção de serviços do Studio Car Recife, com pintura automotiva, funilaria e martelinho de ouro.', width: 1440, height: 800 },
    ],
    role: 'Identifiquei a oportunidade e conversei com o proprietário sobre o que seria útil apresentar. Incluí avaliações do Google e o mapa, comprei o domínio e configurei o Cloudflare para a publicação.',
    assistance: 'O Codex gerou o layout e o código. Minha atuação foi conduzir a proposta, definir o conteúdo com o cliente e colocar o site no ar.',
    details: [
      'Apresentação da oficina e dos serviços.',
      'Avaliações de clientes e mapa de localização.',
      'Links para contato e orçamento pelo WhatsApp.',
      'Domínio próprio e configuração do Cloudflare.',
    ],
    caseStudy: {
      title: 'Uma entrega para um negócio de Recife',
      steps: [
        { title: 'A oportunidade', text: 'A oficina ainda não tinha site. Tomei a iniciativa de propor uma página institucional e alinhei com o proprietário quais informações deveriam aparecer.' },
        { title: 'A entrega', text: 'Conduzi a criação com o Codex, organizei serviços, avaliações e localização, adquiri o domínio e configurei a publicação pelo Cloudflare.' },
        { title: 'O retorno', text: 'O proprietário ficou satisfeito com o site e com a aparência. Depois da publicação, acompanhei os registros de acesso pelo Cloudflare.' },
      ],
    },
    learning: 'Foi uma experiência de conversar com um cliente, definir uma entrega e cuidar das etapas necessárias para que ela ficasse acessível na internet.',
  },
  {
    id: 'market',
    number: '03',
    name: 'OOP Market Simulator',
    subtitle: 'Prática de orientação a objetos em Python.',
    category: 'Estudos',
    type: 'Projeto de estudo',
    description: 'Simulador de mercado com estoque, carrinho e interface em Tkinter. Um projeto anterior para praticar lógica e separação de responsabilidades.',
    tags: ['Python', 'Tkinter', 'POO'],
    repository: 'https://github.com/ayrtonlira-dev/oop-market-simulator',
    role: 'Desenvolvimento de uma aplicação de estudo em Python, com separação entre as regras do mercado e a interface gráfica.',
    details: [
      'Consulta de produtos e controle de estoque.',
      'Adição e remoção de itens do carrinho, com cálculo do total.',
      'Validação de entradas e tratamento de exceções.',
      'Organização em módulos de produto, mercado, carrinho e interface.',
    ],
    learning: 'Praticar orientação a objetos e conectar regras de negócio a uma interface gráfica.',
  },
  {
    id: 'portfolio',
    number: '04',
    name: 'Este portfólio',
    subtitle: 'Apresentação dos meus projetos e contribuições.',
    category: 'Desenvolvimento web',
    type: 'Projeto pessoal',
    description: 'Portfólio em React e Vite, desenvolvido com Codex, com estudos de caso, galeria de telas e temas claro e escuro.',
    tags: ['React', 'CSS', 'Vite'],
    repository: 'https://github.com/ayrtonlira-dev/meu-perfil',
    role: 'Organização dos projetos e da minha trajetória em um portfólio desenvolvido com o codex ',
    details: [
      'Estudos de caso com contribuição, contexto e decisões.',
      'Galeria de capturas reais com navegação por teclado.',
      'Temas claro e escuro e respeito à preferência de movimento.',
      'Publicação no GitHub Pages por GitHub Actions.',
    ],
    learning: 'Apresentar meu trabalho com clareza e tornar as contribuições de cada projeto mais fáceis de avaliar.',
  },
];

export const skills = [
  { name: 'React', icons: ['react'], description: 'Páginas, componentes e estado nas interfaces do GAMERBOXX.', project: 'gamerboxx', evidence: 'Ver projeto' },
  { name: 'JavaScript', icons: ['javascript'], description: 'Integração com endpoints e organização dos dados recebidos pela interface.', project: 'gamerboxx', evidence: 'Ver integração' },
  { name: 'HTML e CSS', icons: ['html', 'css'], description: 'Estrutura, estilos e adaptação das interfaces para diferentes telas.', project: 'portfolio', evidence: 'Ver portfólio' },
  { name: 'Git e GitHub', icons: ['git', 'github'], description: 'Versionamento dos projetos e publicação deste portfólio pelo GitHub Actions.', project: 'portfolio', evidence: 'Ver projeto' },
];
