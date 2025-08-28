import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* Enabling math equations */
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Prof. Adriano Ruseler, Dr. Eng.",
  tagline:
    "PhD in Electrical Engineering in the area of Power Electronics and Electrical Drive.",
  favicon: "img/favicon.ico",
  // PhD in Electrical Engineering in the area of Power Electronics and Electrical Drive.
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://adrianoruseler.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/site/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "adrianoruseler", // Usually your GitHub org/user name.
  projectName: "site", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch that GitHub pages will deploy from.
  trailingSlash: false, // Set to true if you want to add a trailing slash to all URLs.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  /* Diagrams can be rendered using Mermaid in a code block. */
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/AdrianoRuseler/site/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/AdrianoRuseler/site/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Adriano Ruseler",
      logo: {
        alt: "Adriano Ruseler Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/AdrianoRuseler/site",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Sites",
          items: [
            {
              label: "Adriano Ruseler",
              href: "https://adrianoruseler.com/",
            },
            {
              label: "Wiki",
              href: "https://wiki.adrianoruseler.com/",
            },
            {
              label: "OpenWiki",
              href: "https://openwiki.adrianoruseler.com/",
            },
            {
              label: "Moodle",
              href: "https://moodle.adrianoruseler.com/",
            },
            {
              label: "Genealogy",
              href: "https://genealogy.adrianoruseler.com/",
            },
            {
              label: "Webtrees",
              href: "https://webtrees.adrianoruseler.com/",
            },
          ],
        },
        {
          title: "UTFPR",
          items: [
            {
              label: "Moodle",
              href: "https://moodle.utfpr.edu.br/",
            },
            {
              label: "Webmail",
              href: "https://webmail.utfpr.edu.br/",
            },
            {
              label: "Sistemas",
              href: "https://sistemas2.utfpr.edu.br/",
            },
            {
              label: "SEI",
              href: "https://sei.utfpr.edu.br/",
            },
            {
              label: "Chat",
              href: "https://chat.utfpr.edu.br/",
            },
            {
              label: "Ajuda",
              href: "https://ajuda.utfpr.edu.br/",
            },
          ],
        },
        {
          title: "Sistemas",
          items: [
            {
              label: "Consulta Diários",
              href: "https://sistemas2.utfpr.edu.br/url/1141",
            },
            {
              label: "Permanências",
              href: "https://sistemas2.utfpr.edu.br/url/1026",
            },
            {
              label: "Planejamento de Aula",
              href: "https://sistemas2.utfpr.edu.br/url/1890",
            },
            {
              label: "Lançamentos",
              href: "https://sistemas2.utfpr.edu.br/url/1514",
            },
            {
              label: "Mapa de Professor",
              href: "https://sistemas2.utfpr.edu.br/url/1022",
            },
            {
              label: "Mapa de Sala",
              href: "https://sistemas2.utfpr.edu.br/url/1934",
            },
          ],
        },
        {
          title: "Doku Sites",
          items: [
            {
              label: "Moodle Docs",
              href: "https://adrianoruseler.github.io/moodle-docs/",
            },
            {
              label: "My Docs",
              href: "https://adrianoruseler.github.io/my-docs/",
            },
            {
              label: "STM32 Docs",
              href: "https://ruseleredu.github.io/stm32doc/",
            },
            {
              label: "My DocPage",
              href: "https://ruseleredu.github.io/my-docpage/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@Rusla82",
            },
            {
              label: "YouTube Edu",
              href: "https://www.youtube.com/@adrianoruseler653",
            },
            {
              label: "GitHub",
              href: "https://github.com/AdrianoRuseler/",
            },
            {
              label: "GitHub Edu",
              href: "https://github.com/ruseleredu/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/adrianoruseler/",
            },
            {
              label: "ResearchGate",
              href: "https://www.researchgate.net/profile/Adriano-Ruseler/",
            },
            {
              label: "ORCID",
              href: "https://orcid.org/0000-0003-0915-9483",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Docusaurus",
              href: "https://docusaurus.io/docs",
            },
            {
              label: " Markdown Guide",
              href: "https://www.markdownguide.org/",
            },
            {
              label: "GitHub",
              href: "https://github.com/AdrianoRuseler/site",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adriano Ruseler site, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
