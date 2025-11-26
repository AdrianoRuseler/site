---
id: diagrams
title: Diagrams
description: Writing diagrams with Mermaid
slug: /diagrams
---

# Diagrams

Diagrams can be rendered using [Mermaid](https://mermaid-js.github.io/mermaid/) in a code block.

## Installation {#installation}

```bash npm2yarn
npm install --save @docusaurus/theme-mermaid
```

Enable Mermaid functionality by adding plugin `@docusaurus/theme-mermaid` and setting `markdown.mermaid` to `true` in your `docusaurus.config.js`.

```js title="docusaurus.config.js"
export default {
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};
```

## Usage {#usage}

Add a code block with language `mermaid`:

````md title="Example Mermaid diagram"
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

````md
```mermaid
   stateDiagram-v2
    state fork_state <<fork>>
      [*] --> fork_state
      fork_state --> State2
      fork_state --> State3

      state join_state <<join>>
      State2 --> join_state
      State3 --> join_state
      join_state --> State4
      State4 --> [*]
```
````

```mermaid
   stateDiagram-v2
    state fork_state <<fork>>
      [*] --> fork_state
      fork_state --> State2
      fork_state --> State3

      state join_state <<join>>
      State2 --> join_state
      State3 --> join_state
      join_state --> State4
      State4 --> [*]
```

````md
```mermaid
---
config:
  look: handDrawn
  theme: neutral
---
flowchart LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]
```
````

```mermaid
---
config:
  look: handDrawn
  theme: neutral
---
flowchart LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]
```

```mermaid
---
config:
  layout: elk
  look: handDrawn
  theme: neutral
---
flowchart TB
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]
```

See the [Mermaid syntax documentation](https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference) for more information on the Mermaid syntax.

## Theming {#theming}

The diagram dark and light themes can be changed by setting `mermaid.theme` values in the `themeConfig` in your `docusaurus.config.js`. You can set themes for both light and dark mode.

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  },
};
```

See the [Mermaid theme documentation](https://mermaid-js.github.io/mermaid/#/theming) for more information on theming Mermaid diagrams.

## Mermaid Config {#configuration}

Options in `mermaid.options` will be passed directly to `mermaid.initialize`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    mermaid: {
      options: {
        maxTextSize: 50,
      },
    },
  },
};
```

See the [Mermaid config documentation](https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration) and the [Mermaid config types](https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts) for the available config options.

## Dynamic Mermaid Component {#component}

To generate dynamic diagrams, you can use the `Mermaid` component:

```mdx title="Example of dynamic Mermaid component"
import Mermaid from "@theme/Mermaid";

<Mermaid
  value={`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>
```
