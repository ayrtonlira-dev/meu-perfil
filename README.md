# Ayrton Lira — Portfólio

Portfólio pessoal em React + Vite, com foco em desenvolvimento front-end e destaques em verde neon.

## Executar

Requer Node.js 22.12+ ou 24+.

```bash
npm install
npm run dev
```

Abra a URL exibida pelo Vite. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O resultado fica em `dist/`. A aplicação não depende de backend, credenciais ou variáveis de ambiente. O build usa `/meu-perfil/` como caminho base para o GitHub Pages; o desenvolvimento local continua em `/`. Para testar o build, abra `/meu-perfil/` na URL exibida por `npm run preview`.

## Personalizar

- `src/data.js`: links sociais, projetos, contribuições e tecnologias.
- `src/App.jsx`: textos das seções e componentes de interação.
- `src/styles.css`: cores, tipografia, animações e layout responsivo.
- `assets/minha-foto.jpg`: fotografia original, preservada.
- `assets/gamerboxx/`: quatro capturas reais fornecidas por Ayrton, exibidas no cartão e na galeria do projeto.
- `public/favicon.svg`: identidade visual da aba do navegador.

## Recursos

- Tema escuro por padrão e opção de tema claro salva neste navegador.
- Navegação por âncoras, seção ativa e indicador de leitura.
- Menu para telas pequenas, com fechamento por Escape.
- Filtro de projetos, detalhes em diálogo nativo e navegação por teclado.
- Galeria do GAMERBOXX com miniaturas, navegação por setas e acesso às imagens originais.
- Seletor de tecnologias com exemplos de uso.
- Preferência por movimento reduzido respeitada.
- Contato por LinkedIn e GitHub, sem formulário ou endereço fictício.

## Conteúdo e referências

- Nome, UNINASSAU e foco atual em front-end: confirmados por Ayrton nesta conversa. Os avisos de disponibilidade para estágio foram removidos a pedido dele.
- Recife e fotografia: preservados do portfólio original deste repositório.
- GAMERBOXX: nome atualizado por Ayrton, com quatro capturas reais da aplicação fornecidas por ele. Contribuição descrita com base na confirmação de autoria do front-end e na inspeção anterior do checkout `C:\projetos\Newton\newton-front`. O backend Newton é um projeto separado. Nenhum arquivo desse checkout foi alterado. O link do repositório não foi publicado porque o acesso público não pôde ser confirmado.
- OOP Market Simulator: informações conferidas no [README público](https://github.com/ayrtonlira-dev/oop-market-simulator).
- Meu portfólio: [repositório](https://github.com/ayrtonlira-dev/meu-perfil), evoluído da versão inicial em HTML e CSS para React.
- Python permanece apenas no histórico de projetos, como estudo anterior. A apresentação e a seção de tecnologias priorizam React, JavaScript, HTML, CSS e Git.

O cartão e a galeria do GAMERBOXX usam capturas reais. As artes dos outros cartões são composições ilustrativas em HTML/CSS. Fontes Google Fonts possuem fallback local caso a conexão não esteja disponível. A preferência de tema usa localStorage; o site funciona se esse armazenamento estiver bloqueado.

## Publicação

O workflow `.github/workflows/deploy.yml` compila e publica o portfólio no GitHub Pages a cada push na branch `main`. Ele também pode ser executado manualmente pela aba Actions.

Em Settings → Pages, a opção Source deve estar configurada como GitHub Actions.

Endereço do site: https://ayrtonlira-dev.github.io/meu-perfil/

O GitHub Actions instala as dependências com `npm ci`, executa `npm run build` e publica somente a pasta `dist/`. Acompanhe o resultado na aba Actions do repositório.

## Registro da versão inicial

Breve introdução de quem eu sou

<img width="1677" height="953" alt="image" src="https://github.com/user-attachments/assets/c3237535-81de-442f-a3ca-1d9d93f1f688" />
