import studioCarHome from '../assets/studiocar/inicio.png';
import studioCarServices from '../assets/studiocar/servicos.png';
import gamerboxxHome from '../assets/gamerboxx/inicio.png';
import gamerboxxLogin from '../assets/gamerboxx/login.png';
import gamerboxxGames from '../assets/gamerboxx/jogos-avaliados.png';
import gamerboxxLists from '../assets/gamerboxx/listas.png';

export const profile = {
  name: 'Ayrton Lira',
  github: 'https://github.com/ayrtonlira-dev',
  linkedin: 'https://www.linkedin.com/in/ayrton-lira-658b873b9/',
};

export const projects = [
  {
    id: 'studiocar',
    number: '01',
    name: 'Studio Car Recife',
    subtitle: 'Presença digital para um negócio de Recife.',
    category: 'Front-end',
    type: 'Freelance · Website publicado',
    description: 'Site institucional criado como freelance para uma oficina de pintura e funilaria em Recife, com apresentação dos serviços, avaliações de clientes e contato pelo WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repository: null,
    website: 'https://studiocarrecife.com.br/',
    images: [
      { src: studioCarHome, label: 'Página inicial', alt: 'Página inicial do Studio Car Recife, com apresentação da oficina e botão de orçamento pelo WhatsApp.', width: 1440, height: 800 },
      { src: studioCarServices, label: 'Serviços', alt: 'Seção de serviços do Studio Car Recife, com pintura automotiva, funilaria e martelinho de ouro.', width: 1440, height: 800 },
    ],
    role: 'Desenvolvimento do site institucional do Studio Car Recife em um trabalho freelance, usando HTML, CSS e JavaScript.',
    details: [
      'Layout responsivo com apresentação da oficina e dos serviços automotivos.',
      'Contato e solicitação de orçamento por links diretos para o WhatsApp.',
      'Galeria de avaliações de clientes com ampliação e transcrição em texto.',
      'Mapa de localização, horários de atendimento e acesso à rota no Google Maps.',
      'Estrutura semântica, navegação por teclado e metadados para mecanismos de busca.',
    ],
    learning: 'Uma experiência profissional que conecta meus estudos em desenvolvimento web à entrega de um projeto para um cliente.',
  },
  {
    id: 'gamerboxx',
    number: '02',
    name: 'GAMERBOXX',
    subtitle: 'Uma comunidade para quem joga.',
    category: 'Front-end',
    type: 'Front-end · Integração com API',
    description: 'Catálogo, avaliações e listas de jogos em uma experiência social. Front-end em React conectado à API Newton.',
    tags: ['React', 'JavaScript', 'Axios', 'CSS'],
    repository: null,
    images: [
      { src: gamerboxxHome, label: 'Página inicial', alt: 'Página inicial do GAMERBOXX com apresentação da rede social e busca de jogos.' },
      { src: gamerboxxLogin, label: 'Login', alt: 'Tela de login do GAMERBOXX com campos de usuário e senha e acesso ao cadastro.' },
      { src: gamerboxxGames, label: 'Jogos avaliados', alt: 'Lista de jogos registrados no GAMERBOXX, com status de jogado e avaliações em estrelas.' },
      { src: gamerboxxLists, label: 'Listas de jogos', alt: 'Lista ranqueada Souls-like no GAMERBOXX, com busca para adicionar jogos e opção de remoção.' },
    ],
    role: 'Desenvolvimento de todo o front-end e integração com endpoints disponibilizados pelo backend Newton. O backend foi desenvolvido separadamente.',
    details: [
      'Interfaces de cadastro, login, catálogo, busca e detalhes dos jogos.',
      'Avaliações com notas, edição, remoção e proteção de spoilers.',
      'Criação e gerenciamento de listas, perfil público e diário de jogos.',
      'Integração com a API usando Axios e gestão de sessão com Context API.',
    ],
    learning: 'Conectar interfaces a uma API real, organizar componentes e serviços e lidar com estados de carregamento, erro e autenticação.',
  },
  {
    id: 'market',
    number: '04',
    name: 'OOP Market Simulator',
    subtitle: 'Da lógica ao carrinho de compras.',
    category: 'Estudos',
    type: 'Estudo anterior · Python',
    description: 'Projeto da minha trajetória de aprendizado: um simulador de mercado com estoque, carrinho e interface gráfica para praticar orientação a objetos.',
    tags: ['Python', 'Tkinter', 'POO'],
    repository: 'https://github.com/ayrtonlira-dev/oop-market-simulator',
    role: 'Desenvolvimento de uma aplicação de estudo em Python, com separação entre as regras do mercado e a interface gráfica.',
    details: [
      'Consulta de produtos e controle de estoque.',
      'Adição e remoção de itens do carrinho, com cálculo do total.',
      'Validação de entradas e tratamento de exceções.',
      'Organização em módulos de produto, mercado, carrinho e interface.',
    ],
    learning: 'Aplicar orientação a objetos, separar responsabilidades e conectar a lógica de negócio a uma interface com Tkinter.',
  },
  {
    id: 'portfolio',
    number: '03',
    name: 'Meu portfólio',
    subtitle: 'Um espaço para a minha evolução.',
    category: 'Front-end',
    type: 'Website pessoal · Em evolução',
    description: 'Meu ponto de encontro com novas oportunidades. Uma página em React para compartilhar projetos, estudos e minha trajetória.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/ayrtonlira-dev/meu-perfil',
    role: 'Portfólio pessoal que evolui junto com meus estudos: da primeira versão em HTML e CSS para esta experiência em React.',
    details: [
      'Layout adaptado para celular, tablet e desktop.',
      'Navegação por seções e apresentação dos projetos com filtros.',
      'Temas claro e escuro e animações que respeitam a preferência de movimento.',
      'Links para meu GitHub e LinkedIn.',
    ],
    learning: 'Organizar uma aplicação React, construir layouts responsivos e cuidar dos detalhes de navegação e acessibilidade.',
  },
].sort((first, second) => Number(first.number) - Number(second.number));

export const skills = [
  { name: 'React', icon: 'react', color: '#93cddd', label: 'Interfaces que respondem', description: 'Componentes, estado e Context API para construir interfaces interativas. Na prática, desenvolvendo o GAMERBOXX e este portfólio.' },
  { name: 'JavaScript', icon: 'javascript', color: '#e7d58a', label: 'Interação em cada detalhe', description: 'Lógica para a web, eventos e integração com APIs. A base das minhas aplicações em React.' },
  { name: 'HTML', icon: 'html', color: '#eaa58a', label: 'Uma base bem estruturada', description: 'Estrutura e semântica para páginas web, com atenção ao conteúdo, à navegação e à acessibilidade.' },
  { name: 'CSS', icon: 'css', color: '#a1b8e7', label: 'Forma, ritmo e movimento', description: 'Layouts responsivos, estilos e animações para transformar interfaces em experiências agradáveis em diferentes telas.' },
  { name: 'Git', icon: 'git', color: '#e7a393', label: 'Evolução, um commit por vez', description: 'Versionamento do código, organização de alterações e repositórios no GitHub para acompanhar a evolução dos meus projetos.' },
];
