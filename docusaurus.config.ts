import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* Enabling math equations */
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} Adriano Ruseler, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;

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

  onBrokenLinks: "warn", // 'warn' or 'ignore'
  markdown: {
    mermaid: true, // Diagrams can be rendered using Mermaid in a code block.
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Include the KaTeX CSS in your config under stylesheets:
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-WcoG4HRXMzYzfCgiyfrySxx90XSl2rxY5mnVY5TwtWE6KLrArNKn0T/mOgNL0Mmi",
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "utfpr", // Unique ID for this docs instance
        path: "utfpr", // Path to your API docs folder
        routeBasePath: "utfpr", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarsutfpr.js"), // Separate sidebar for API docs
        // 👇 Add this line for the last update time
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // ... other options specific to your API docs
      },
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
          label: "Docs",
        },
        {
          label: "UTFPR",
          to: "/utfpr/about", // Link to a page in your UTFPR docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/utfpr/ELT72B/folder", // Link to a page in your UTFPR docs
              label: "ELT72B - Sistemas Digitais",
            },
            {
              to: "/utfpr/ELT73A/folder", // Link to a page in your UTFPR docs
              label: "ELT73A - Sistemas Microcontrolados",
            },
            {
              to: "/utfpr/ELT82E/folder", // Link to a page in your UTFPR docs
              label: "ELT82E - Eletrônica Analógica",
            },
            {
              to: "/utfpr/ELT74E/folder", // Link to a page in your UTFPR docs
              label: "ELT74E - Amplificadores Operacionais e Semicondutores",
            },
            {
              to: "/utfpr/ET76C/folder", // Link to a page in your UTFPR docs
              label: "ET76C - Eletrônica de Potência",
            },
          ],
        },

        {
          label: "Cloud",
          to: "/docs/cloud/folder", // Link to a page in your Cloud docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/cloud/oracle-about", // Link to a page in your Cloud docs
              label: "Oracle OCI",
            },
          ],
        },

        {
          label: "Hardware",
          to: "/docs/hardware/folder", // Link to a page in your Cloud docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/hardware/hardware-about", // Link to a page in your Hardware docs
              label: "Introduction",
            },
            {
              to: "/docs/category/odroid-hc1", // Link to a page in your Hardware docs
              label: "Odroid-HC1",
            },
            {
              to: "/docs/category/er605", // Link to a page in your Hardware docs
              label: "ER605",
            },
            {
              to: "/docs/category/typhoon-hil402", // Link to a page in your Hardware docs
              label: "Typhoon HIL402",
            },
          ],
        },

        {
          label: "Simulators",
          to: "/docs/simulators/folder", // Link to a page in your Cloud docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/simulators/simulators-about", // Link to a page in your Hardware docs
              label: "Introduction",
            },
          ],
        },

        {
          label: "Software",
          to: "/docs/tools/folder", // Link to a page in your Cloud docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/tools/tools-about", // Link to a page in your Hardware docs
              label: "Introduction",
            },
          ],
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
            {
              label: "Calendário",
              href: "https://www.utfpr.edu.br/alunos/calendario",
            },
            {
              label: "TCC",
              href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
            },
          ],
        },
        {
          title: "Sistemas",
          items: [
            {
              label: "Sigepe",
              href: "https://sougov.sigepe.gov.br/sougov/Home",
            },
            {
              label: "Consulta Diários",
              href: "https://sistemas2.utfpr.edu.br/url/1141",
            },
            {
              label: "Permanências",
              href: "https://sistemas2.utfpr.edu.br/url/1026",
            },
            {
              label: "Planejamento",
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
          title: "Doku Sites",
          items: [
            {
              label: "Main Site",
              href: "https://adrianoruseler.github.io/site/",
            },
            {
              label: "STM32 Docs",
              href: "https://ruseleredu.github.io/stm32doc/",
            },
            {
              label: "Sistemas Digitais",
              href: "https://ruseleredu.github.io/sd-docs/",
            },
            {
              label: "LabSEC",
              href: "https://ruseleredu.github.io/labsec/",
            },
            {
              label: "Moodle Docs",
              href: "https://adrianoruseler.github.io/moodle-docs/",
            },
            {
              label: "My Docs",
              href: "https://adrianoruseler.github.io/my-docs/",
            },
            {
              label: "My DocPage",
              href: "https://ruseleredu.github.io/my-docpage/",
            },
          ],
        },
        {
          title: "Downloads",
          items: [
            {
              label: "ReleaseBB",
              href: "https://rlsbb.ru/",
            },
            {
              label: "LibGen",
              href: "https://libgen.li/",
            },
            {
              label: "Sci-Hub",
              href: "https://sci-hub.se/",
            },
            {
              label: "SolidSQUAD",
              href: "https://x.com/TeAMSolidSQUAD",
            },
            {
              label: "haxNode",
              href: "http://haxnode.net/",
            },
          ],
        },
        {
          title: "More", //
          items: [
            {
              label: "TV Maze",
              href: "https://www.tvmaze.com/",
            }, //
            {
              label: "TorrentFreak",
              href: "https://torrentfreak.com/",
            }, //
            {
              label: "Torrends",
              href: "https://torrends.to/",
            },
            {
              label: "uIndex",
              href: "https://uindex.org/",
            },
            {
              label: "1377X",
              href: "https://www.1377x.to/",
            },
            {
              label: "YTS",
              href: "https://yts-official.mx/",
            },
          ],
        },
      ],
      copyright: COPYRIGHT_STRING,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
