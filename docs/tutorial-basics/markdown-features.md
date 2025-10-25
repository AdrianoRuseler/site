---
sidebar_position: 4
---

# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

- https://www.markdownguide.org/tools/docusaurus/

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

**Result:** Let's see how to [Create a page](./create-a-page.md).

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

![HIL402](/img/HIL402_Side_Transparent.webp)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`);
}}>
{children}
</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !

## Navbar dropdown {#navbar-dropdown}

Navbar items of the type `dropdown` has the additional `items` field, an inner array of navbar items.

Navbar dropdown items only accept the following **"link-like" item types**:

- [Navbar link](#navbar-link)
- [Navbar doc link](#navbar-doc-link)
- [Navbar docs version](#navbar-docs-version)
- [Navbar doc sidebar](#navbar-doc-sidebar)
- [Navbar with custom HTML](#navbar-with-custom-html)

Note that the dropdown base item is a clickable link as well, so this item can receive any of the props of a [plain navbar link](#navbar-link).

Accepted fields:

| Name       | Type                                            | Default      | Description                                        |
| ---------- | ----------------------------------------------- | ------------ | -------------------------------------------------- |
| `type`     | `'dropdown'`                                    | Optional     | Sets the type of this item to a dropdown.          |
| `label`    | `string`                                        | **Required** | The name to be shown for this item.                |
| `items`    | <code>[LinkLikeItem](#navbar-dropdown)[]</code> | **Required** | The items to be contained in the dropdown.         |
| `position` | <code>'left' \| 'right'</code>                  | `'left'`     | The side of the navbar this item should appear on. |

Example configuration:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "dropdown",
          label: "Community",
          position: "left",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com",
            },
            {
              type: "doc",
              label: "Social",
              docId: "social",
            },
            // ... more items
          ],
        },
        // highlight-end
      ],
    },
  },
};
```

### Navbar link {#navbar-link}

By default, Navbar items are regular links (internal or external).

React Router should automatically apply active link styling to links, but you can use `activeBasePath` in edge cases. For cases in which a link should be active on several different paths (such as when you have multiple doc folders under the same sidebar), you can use `activeBaseRegex`. `activeBaseRegex` is a more flexible alternative to `activeBasePath` and takes precedence over it -- Docusaurus parses it into a regular expression that is tested against the current URL.

Outbound (external) links automatically get `target="_blank" rel="noopener noreferrer"` attributes.

Accepted fields:

| Name                   | Type                           | Default       | Description                                                                                                             |
| ---------------------- | ------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `type`                 | `'default'`                    | Optional      | Sets the type of this item to a link.                                                                                   |
| `label`                | `string`                       | **Required**  | The name to be shown for this item.                                                                                     |
| `html`                 | `string`                       | Optional      | Same as `label`, but renders pure HTML instead of text content.                                                         |
| `to`                   | `string`                       | **Required**  | Client-side routing, used for navigating within the website. The baseUrl will be automatically prepended to this value. |
| `href`                 | `string`                       | **Required**  | A full-page navigation, used for navigating outside of the website. **Only one of `to` or `href` should be used.**      |
| `prependBaseUrlToHref` | `boolean`                      | `false`       | Prepends the baseUrl to `href` values.                                                                                  |
| `position`             | <code>'left' \| 'right'</code> | `'left'`      | The side of the navbar this item should appear on.                                                                      |
| `activeBasePath`       | `string`                       | `to` / `href` | To apply the active class styling on all routes starting with this path. This usually isn't necessary.                  |
| `activeBaseRegex`      | `string`                       | `undefined`   | Alternative to `activeBasePath` if required.                                                                            |
| `className`            | `string`                       | `''`          | Custom CSS class (for styling any item).                                                                                |

:::note

In addition to the fields above, you can specify other arbitrary attributes that can be applied to a HTML link.

:::

Example configuration:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          to: "docs/introduction",
          // Only one of "to" or "href" should be used
          // href: 'https://www.facebook.com',
          label: "Introduction",
          // Only one of "label" or "html" should be used
          // html: '<b>Introduction</b>'
          position: "left",
          activeBaseRegex: "docs/(next|v8)",
          target: "_blank",
        },
        // highlight-end
      ],
    },
  },
};
```

### Navbar doc link {#navbar-doc-link}

If you want to link to a specific doc, this special navbar item type will render the link to the doc of the provided `docId`. It will get the class `navbar__link--active` as long as you browse a doc of the same sidebar.

Accepted fields:

| Name           | Type                           | Default      | Description                                        |
| -------------- | ------------------------------ | ------------ | -------------------------------------------------- |
| `type`         | `'doc'`                        | **Required** | Sets the type of this item to a doc link.          |
| `docId`        | `string`                       | **Required** | The ID of the doc that this item links to.         |
| `label`        | `string`                       | `docId`      | The name to be shown for this item.                |
| `position`     | <code>'left' \| 'right'</code> | `'left'`     | The side of the navbar this item should appear on. |
| `docsPluginId` | `string`                       | `'default'`  | The ID of the docs plugin that the doc belongs to. |

Example configuration:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Docs",
        },
        // highlight-end
      ],
    },
  },
};
```

### Navbar docs version {#navbar-docs-version}

If you use docs with versioning, this special navbar item type will link to the active/browsed version of your doc (depends on the current URL), and fallback to the latest version.

Accepted fields:

| Name           | Type                           | Default                          | Description                                                   |
| -------------- | ------------------------------ | -------------------------------- | ------------------------------------------------------------- |
| `type`         | `'docsVersion'`                | **Required**                     | Sets the type of this item to a doc version link.             |
| `label`        | `string`                       | The active/latest version label. | The name to be shown for this item.                           |
| `to`           | `string`                       | The active/latest version.       | The internal link that this item points to.                   |
| `position`     | <code>'left' \| 'right'</code> | `'left'`                         | The side of the navbar this item should appear on.            |
| `docsPluginId` | `string`                       | `'default'`                      | The ID of the docs plugin that the doc versioning belongs to. |

Example configuration:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersion",
          position: "left",
          to: "/path",
          label: "label",
        },
        // highlight-end
      ],
    },
  },
};
```

### Navbar linked to a sidebar {#navbar-doc-sidebar}

You can link a navbar item to the first document link (which can be a doc link or a generated category index) of a given sidebar without having to hardcode a doc ID.

Accepted fields:

| Name           | Type                           | Default                             | Description                                                      |
| -------------- | ------------------------------ | ----------------------------------- | ---------------------------------------------------------------- |
| `type`         | `'docSidebar'`                 | **Required**                        | Sets the type of this navbar item to a sidebar's first document. |
| `sidebarId`    | `string`                       | **Required**                        | The ID of the sidebar that this item is linked to.               |
| `label`        | `string`                       | First document link's sidebar label | The name to be shown for this item.                              |
| `position`     | <code>'left' \| 'right'</code> | `'left'`                            | The side of the navbar this item should appear on.               |
| `docsPluginId` | `string`                       | `'default'`                         | The ID of the docs plugin that the sidebar belongs to.           |

:::tip

Use this navbar item type if your sidebar is updated often and the order is not stable.

:::

Example configuration:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "api",
          label: "API",
        },
        // highlight-end
      ],
    },
  },
};
```

```js title="sidebars.js"
export default {
  tutorial: [
    {
      type: "autogenerated",
      dirName: "guides",
    },
  ],
  api: [
    // highlight-next-line
    "cli", // The navbar item will be linking to this doc
    "docusaurus-core",
    {
      type: "autogenerated",
      dirName: "api",
    },
  ],
};
```

### Navbar with custom HTML {#navbar-with-custom-html}

You can also render your own HTML markup inside a navbar item using this navbar item type.

| Name        | Type                           | Default      | Description                                         |
| ----------- | ------------------------------ | ------------ | --------------------------------------------------- |
| `type`      | `'html'`                       | **Required** | Sets the type of this item to a HTML element.       |
| `position`  | <code>'left' \| 'right'</code> | `'left'`     | The side of the navbar this item should appear on.  |
| `className` | `string`                       | `''`         | Custom CSS class for this navbar item.              |
| `value`     | `string`                       | `''`         | Custom HTML to be rendered inside this navbar item. |

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "html",
          position: "right",
          value: "<button>Give feedback</button>",
        },
        // highlight-end
      ],
    },
  },
};
```
