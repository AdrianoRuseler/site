import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
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
];

export default navbarItems;
