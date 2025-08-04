---
sidebar_position: 5
---

# Deploy your site

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).

## create a new repository on the command line

```bash
echo "# site" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:AdrianoRuseler/site.git
git push -u origin main
```

## push an existing repository from the command line

```bash
git remote add origin git@github.com:AdrianoRuseler/site.git
git branch -M main
git push -u origin main
```

[INFO] Inside that directory, you can run several commands:

`npm start`
Starts the development server.

`npm run build`
Bundles your website into static files for production.

`npm run serve`
Serves the built website locally.

`npm run deploy`
Publishes the website to GitHub pages.

We recommend that you begin by typing:

`cd site`
`npm start`

Happy building awesome websites!
