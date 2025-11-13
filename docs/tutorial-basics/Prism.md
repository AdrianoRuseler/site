---
title: Prism (Code Block)
description: Lightweight, robust, elegant syntax highlighting.
---

# Lightweight, robust, elegant syntax highlighting.

Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.

## Sites

- https://github.com/PrismJS/prism
- https://prismjs.com/
- https://prismjs.com/#basic-usage
- https://prismjs.com/examples#per-language-examples
- https://docusaurus.io/docs/markdown-features/code-blocks

Docusaurus uses Prism.js for syntax highlighting, and the list of supported languages is determined by which Prism.js components are included in your build.

There are two categories of languages you need to be aware of:

## Docusaurus's Default Languages

Docusaurus includes a small set of very common languages by default to keep the bundle size small. You don't need to do anything to use these; they are ready to go. The list includes languages and their aliases, such as:

- `markup`, `html`, `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`
- `css`
- `clike` (C-like)
- `js`, `javascript`
- `jsx`
- `tsx`
- `csharp`, `cs`
- `bash`, `shell`
- `json`
- `markdown`, `md`
- `python`, `py`
- `java`
- `sql`

### Core Default Code Samples

- `js`, `javascript`

```js
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

- `python`, `py`

```py
print("Hello, World!")
```

## All Prism.js Supported Languages

Prism.js itself supports a massive number of languages, far more than Docusaurus includes by default. To use any of these, you must explicitly add them to your `docusaurus.config.js` file.

You can find the full, comprehensive list of all supported languages (and their aliases) by browsing the `node_modules/prismjs/components` directory in your Docusaurus project. The language component file names are in the format `prism-language_name.js`. The `language_name` is what you should add to your configuration.

**How to add them:**

1.  Open your `docusaurus.config.js` file.
2.  Find the `themeConfig` object.
3.  Add the `prism` object and the `additionalLanguages` array.
4.  Specify the languages you want to add as strings in the array.

For example, if you wanted to add support for PHP and PowerShell, your config would look like this:

```javascript
// docusaurus.config.js

import { themes as prismThemes } from "prism-react-renderer";

export default {
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php", "powershell"],
    },
  },
};
```

**Common language identifiers you might want to add:**

- `go`
- `php`
- `ruby`
- `rust`
- `typescript`, `ts`
- `yaml`
- `json5`
- `c`
- `cpp`
- `r`

This approach ensures your website only includes the code highlighting assets it needs, keeping the build lean and performant.

## Highlighting with comments

You can use comments with `highlight-next-line`, `highlight-start`, and `highlight-end` to select which lines are highlighted.

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return "This text is highlighted!";
  }

  return "Nothing highlighted";
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return "This range is highlighted!";
  }
  // highlight-end

  return "Nothing highlighted";
}
```
