# Portfólio · Ayrton Lira

Meu portfólio pessoal, feito em **React + Vite** e publicado no **GitHub Pages** com deploy automático.

🔗 **Acesse:** https://ayrtonlira-dev.github.io/meu-perfil/

![Página inicial do portfólio](https://github.com/user-attachments/assets/59942732-1e82-4f61-bc21-d5ab0e25512d)

## ✨ Funcionalidades

- **Projetos com filtro** por categoria e detalhes abertos em um `<dialog>` nativo
- **Galeria** com miniaturas, navegação por setas do teclado e link para a imagem original
- **Tema escuro por padrão**, com tema claro salvo no navegador (`localStorage`)
- **Navegação por âncoras** com seção ativa destacada e barra de progresso de leitura
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

## 📸 Telas

| Projetos | Detalhe do projeto |
|---|---|
| ![Seção de projetos](https://github.com/user-attachments/assets/fed2c150-d329-48b4-b492-c8ee26479132) | ![Detalhe de projeto](https://github.com/user-attachments/assets/29d30176-d494-49f5-893e-59538f5b46d3) |
| ![Tecnologias](https://github.com/user-attachments/assets/800f3cb5-8825-4582-9f39-2eb53816850f) | ![Contato](https://github.com/user-attachments/assets/ba7bd7d0-56ab-45c3-964b-61f61f271588) |

## 📫 Contato

[LinkedIn](https://www.linkedin.com/in/ayrton-lira-658b873b9/) · ayrtonslira@gmail.com
