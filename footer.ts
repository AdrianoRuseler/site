import { ThemeConfig } from "@docusaurus/preset-classic";

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
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} Adriano Ruseler, Inc. Built with <a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a> at ${utc3Time} UTC-3.`;

const footer: ThemeConfig["footer"] = {
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
        {
          label: "Nuvem",
          href: "https://nuvem.utfpr.edu.br/",
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
          label: "gov.br",
          href: "https://servicos.acesso.gov.br/",
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
          label: "Analógica",
          href: "https://ruseleredu.github.io/ea-docs/",
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
      ],
    },
    {
      title: "AI", //
      items: [
        {
          label: "Gemini",
          href: "https://gemini.google.com/app",
        }, //
        {
          label: "ChatGPT",
          href: "https://chatgpt.com/",
        }, //
        {
          label: "Claude",
          href: "https://claude.ai/",
        },
        {
          label: "Copilot",
          href: "https://copilot.microsoft.com/",
        },
        {
          label: "DeepSeek",
          href: "https://chat.deepseek.com/",
        },
        {
          label: "Grok",
          href: "https://grok.com/",
        },
        {
          label: "Kimi",
          href: "https://www.kimi.com/en",
        },
        {
          label: "GLM",
          href: "https://chat.z.ai/",
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
          href: "https://sci-hub.box/",
        },
        {
          label: "SolidSQUAD",
          href: "https://x.com/TeAMSolidSQUAD",
        },
        {
          label: "haxNode",
          href: "https://haxnode.net",
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
          href: "https://ww3.yts-official.to/",
        },
      ],
    },
  ],
  copyright: COPYRIGHT_STRING,
};

export default footer;
