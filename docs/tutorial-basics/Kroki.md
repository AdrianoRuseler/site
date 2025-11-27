---
title: Kroki
description: Kroki provides a unified API for all the diagram libraries.
---

docker-compose.yml

```yml
services:
  kroki:
    image: yuzutech/kroki
    depends_on:
      - mermaid
      - bpmn
      - excalidraw
    environment:
      - KROKI_MERMAID_HOST=mermaid
      - KROKI_BPMN_HOST=bpmn
      - KROKI_EXCALIDRAW_HOST=excalidraw
    ports:
      - "8000:8000"
    # If you do need to explicitly mount /tmp, make sure to include the exec option
    tmpfs:
      - /tmp:exec
  mermaid:
    image: yuzutech/kroki-mermaid
    expose:
      - "8002"
  bpmn:
    image: yuzutech/kroki-bpmn
    expose:
      - "8003"
  excalidraw:
    image: yuzutech/kroki-excalidraw
    expose:
      - "8004"
```

## Integrating Kroki with Docusaurus

Integrating Kroki with Docusaurus is an excellent way to embed a wide range of diagrams (Mermaid, PlantUML, BlockDiag, etc.) directly into your documentation, treating them like native Markdown code blocks.

Since Docusaurus uses MDX (which is based on Remark), the most robust way to achieve this is by using a Remark plugin. The recommended plugin for this is remark-kroki (or similar community-maintained plugins like remark-kroki-diagrams-plugin).

Here is a step-by-step guide on how to set it up:

### Step 1: Install the Plugin

First, install the remark-kroki package in your Docusaurus project directory:

```bash
# Install Kroki's remark plugin
npm install --save-dev remark-kroki

# If you haven't already set up Docusaurus for TypeScript
# npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig @docusaurus/types
```

### Step 2: Configure Docusaurus

You need to tell Docusaurus to use this plugin when processing Markdown files. Edit your docusaurus.config.js file.

You must import the plugin and then add it to the remarkPlugins array within the configuration for your content plugin (usually the docs or classic preset).

````ts
// docusaurus.config.js

// 1. Import the plugin dynamically since it's an ES Module
const { remarkKroki } = await import("remark-kroki");

module.exports = {
  presets: [
    [
      "classic",
      {
        docs: {
          // 2. Add the plugin to your docs configuration
          remarkPlugins: [
            [
              remarkKroki,
              {
                // REQUIRED: Set the Kroki server URL
                server: "http://localhost:8000",
                // OR use the public service: server: 'https://kroki.io',

                // OPTIONAL: Specify how to embed the SVG
                // 'img-base64' is a common default
                output: "img-base64",

                // OPTIONAL: Set aliases so you can use ```plantuml``` instead of ```kroki type=plantuml```
                // alias: ["plantuml", "mermaid", "graphviz", "wireviz"],
              },
            ],
          ],
          // ... other docs options
        },
        // ... other preset options
      },
    ],
  ],
  // ... rest of your config
};
````
