# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npx create-docusaurus@latest site classic --typescript
```

[Diagrams](https://docusaurus.io/docs/markdown-features/diagrams)

```bash
npm install --save @docusaurus/theme-mermaid
```

## Clone repo

```bash
git clone https://github.com/AdrianoRuseler/site.git
cd site
npm i
```

## Local Development

```bash
cd site
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
npm run server
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
set GIT_USER=AdrianoRuseler
npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
