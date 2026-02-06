---
title: Footer and Navbar
description: Separate Docusaurus Footer and NavBar Configuration
---

## Separate Docusaurus Footer Configuration

- Create `footer.ts` file at the same level as `docusaurus.config.ts`

```ts
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
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} My Site, Inc. Built with <a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a> at ${utc3Time} UTC-3.`;

const footer: ThemeConfig["footer"] = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [{ label: "Tutorial", to: "/docs/intro" }],
    },
    // ... rest of your links
  ],
  copyright: COPYRIGHT_STRING,
};

export default footer;
```

- In `docusaurus.config.ts`

```ts
import { Config } from "@docusaurus/types";
import footer from "./footer"; // No need for .ts extension here

const config: Config = {
  title: "My Site",
  // ... other config

  themeConfig: {
    footer: footer, // Use the imported object
    // ... other themeConfig
  },
};

export default config;
```

---

Create a file named navbar.ts in the same directory as your config. We will use the NavbarItem type from Docusaurus to ensure your links are structured correctly.

In `navbar.ts`

```ts
import { NavbarItem } from "@docusaurus/theme-common";

const navbarItems: NavbarItem[] = [
  {
    type: "docSidebar",
    sidebarId: "tutorialSidebar",
    position: "left",
    label: "Tutorial",
  },
  { to: "/blog", label: "Blog", position: "left" },
  {
    href: "https://github.com/facebook/docusaurus",
    label: "GitHub",
    position: "right",
  },
];

export default navbarItems;
```

Now, import the items and assign them to the navbar.items property.

```ts
import { Config } from "@docusaurus/types";
import footer from "./footer";
import navbarItems from "./navbar"; // Import your new navbar file

const config: Config = {
  title: "MySite",
  // ... rest of your config

  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: navbarItems, // Drop the imported array here
    },
    footer: footer,
  },
};

export default config;
```
