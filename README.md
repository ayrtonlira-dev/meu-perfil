# Portfólio · Ayrton Lira

Meu portfólio pessoal, com foco em oportunidades de estágio em desenvolvimento fullstack, feito em **React + Vite** e publicado no **GitHub Pages** com deploy automático.

🔗 **Acesse:** https://ayrtonlira-dev.github.io/meu-perfil/

## ✨ Funcionalidades

- **Projetos em destaque:** GAMERBOXX (em desenvolvimento) e Studio Car Recife (publicado), com contribuição e estudos de caso em um `<dialog>` nativo
- **Projetos complementares** e tecnologias associadas aos trabalhos em que são aplicadas
- **Galeria** com miniaturas, navegação por setas do teclado e link para a imagem original
- **Tema escuro por padrão**, com tema claro salvo no navegador (`localStorage`)
- **Navegação por âncoras** com seção ativa destacada
- **Menu responsivo** para telas pequenas
- **Acessibilidade:** navegação por teclado, foco gerenciado, textos alternativos nas imagens e respeito a `prefers-reduced-motion`
- **SEO básico:** título e meta description

## 🛠️ Tecnologias

- React 19
- Vite
- CSS puro (sem framework)
- GitHub Actions + GitHub Pages

## 📁 Estrutura

```
src/
├── App.jsx      # componentes e seções da página
├── data.js      # projetos, tecnologias e links (edite aqui para atualizar o conteúdo)
├── main.jsx     # ponto de entrada
└── styles.css   # estilos e temas
assets/          # foto e capturas de tela dos projetos
.github/workflows/deploy.yml  # build e publicação automática a cada push na main
```

Os textos dos projetos ficam separados dos componentes em `data.js`, então adicionar um projeto novo não exige mexer no layout.

## ▶️ Rodando localmente

```bash
git clone https://github.com/ayrtonlira-dev/meu-perfil.git
cd meu-perfil
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Conteúdo dos estudos de caso

- **GAMERBOXX:** produto em desenvolvimento com um amigo responsável pelo backend. Minha atuação nas interfaces, integração com a API e implementação de um endpoint no backend para consulta de jogos por IDs. As capturas mostram o ambiente local.
- **Studio Car Recife:** oportunidade identificada, conversa com o cliente, definição do conteúdo, domínio e Cloudflare. O layout e o código foram gerados com o Codex.
- O portfólio também foi desenvolvido com assistência do Codex.

As informações e capturas ficam em `src/data.js` e `assets/`. O currículo público é servido a partir de `public/curriculo-ayrton-lira.pdf`.

## 📫 Contato

[LinkedIn](https://www.linkedin.com/in/ayrton-lira-658b873b9/) · ayrtonslira@gmail.com
