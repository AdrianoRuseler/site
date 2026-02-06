import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* Enabling math equations */
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import footer from "./footer"; // No need for .ts extension here

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
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Wsr4Nh3yrvMf2KCebJchRJoVo1gTU6kcP05uRSh5NV3sj9+a8IomuJoQzf3sMq4T",
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
          label: "Server",
          to: "/docs/server/folder", // Link to a page in your Server docs
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/server/oracle-about",
              label: "Oracle OCI",
            },
            {
              to: "/docs/category/xcp-ng",
              label: "XCP-ng",
            },
            {
              to: "/docs/category/xen-orchestra",
              label: "Xen Orchestra",
            },
          ],
        },

        {
          label: "Hardware",
          to: "/docs/hardware/folder",
          type: "dropdown",
          position: "left",
          items: [
            {
              to: "/docs/hardware/hardware-about",
              label: "Introduction",
            },
            {
              to: "/docs/category/odroid-hc1",
              label: "Odroid-HC1",
            },
            {
              to: "/docs/category/er605",
              label: "ER605",
            },
            {
              to: "/docs/category/typhoon-hil402",
              label: "Typhoon HIL402",
            },
            {
              to: "/docs/category/blackview-mp60",
              label: "Blackview MP60",
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
              to: "/docs/simulators/simulators-about",
              label: "Introduction",
            },
            {
              to: "/docs/category/ltspice",
              label: "LTspice",
            },
            {
              to: "/docs/category/psim",
              label: "PSIM",
            },
            {
              to: "/docs/category/tinkercad",
              label: "TinkerCad",
            },
            {
              to: "/docs/category/smath",
              label: "SMath",
            },
            {
              to: "/docs/category/micro-cap",
              label: "Micro-Cap",
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
              to: "/docs/tools/tools-about",
              label: "Introduction",
            },
            {
              to: "/docs/tools/e-learning",
              label: "E-Learning",
            },
            {
              to: "/docs/tools/ffmpeg",
              label: "FFmpeg",
            },
            {
              to: "/docs/tools/mixed-in-key",
              label: "Mixed In Key",
            },
            {
              to: "/docs/tools/playwright",
              label: "Playwright",
            },
            {
              to: "/docs/tools/yt-dlp",
              label: "yt-dlp",
            },
            {
              to: "/docs/tools/docker",
              label: "Docker",
            },
            {
              to: "/docs/tools/autohotkey",
              label: "AutoHotkey",
            },
            {
              to: "/docs/tools/kicad",
              label: "KiCad",
            },
          ],
        },
        {
          to: "/pdf/CT2026.pdf",
          label: "Calendário",
          position: "right",
          target: "_blank",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/AdrianoRuseler/site",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: footer, // Use the imported object
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "autohotkey",
        "arduino",
        "apacheconf",
        "nginx",
        "bash",
        "matlab",
        "powershell",
        "ini",
        "latex",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
