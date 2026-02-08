---
title: </> Prism (Code Block)
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
- `bash`, `shell`
- `json`
- `markdown`, `md`
- `python`, `py`
- `sql`

### Core Default Code Samples

- `clike` (C-like)

```clike
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

```c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

- `js`, `javascript`
- https://www.w3schools.com/js/js_examples.asp

```js
// Declaring variables
let name = "Alice"; // String
const age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "hiking"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object

console.log(name);
console.log(age);
console.log(hobbies[0]); // Accessing array elements
console.log(person.firstName); // Accessing object properties
```

- `tsx`
- https://www.w3schools.com/typescript/

```tsx
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(123);

console.log(output1);
console.log(output2);
```

- `java`
- https://www.w3schools.com/java/java_examples.asp

```java
public class Main {
  public static void main(String[] args) {
    /* The code below will print the words Hello World
    to the screen, and it is amazing */
    System.out.println("Hello World");
  }
}
```

- `python`, `py`
- https://www.w3schools.com/python/python_examples.asp

```py
def factorial(n):
    """
    Calculates the factorial of a non-negative integer.
    """
    if n == 0:
        return 1
    else:
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result

# Example usage:
number = 5
print(f"The factorial of {number} is: {factorial(number)}")
```

- `sql`
- https://www.w3schools.com/sql/sql_examples.asp

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    HireDate DATE
);
```

- `json`

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "hiking", "gaming"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345"
  }
}
```

- `xml`
- https://www.w3schools.com/xml/default.asp

```xml
 <?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

- `yml` or `yaml`

```yml
---
# This is a sample YAML file
# It demonstrates key-value pairs, lists, and nested structures.

# Simple key-value pairs
name: Jane Doe
age: 30
is_student: false
gpa: 3.85

# A list of items
hobbies:
  - Reading
  - Hiking
  - Cooking
  - Photography

# A nested structure (mapping within a mapping)
address:
  street: 123 Main St
  city: Anytown
  state: CA
  zip_code: "90210" # String value for zip code

# Another list with nested mappings
courses:
  - title: Introduction to Programming
    instructor: Dr. Smith
    credits: 3
  - title: Data Structures
    instructor: Prof. Johnson
    credits: 4

# Multi-line string using literal style (preserves newlines)
description: |
  This is a multi-line
  description of the
  sample data.

# Multi-line string using folded style (folds newlines into spaces)
summary: >
  This is a summary that
  will appear as a single line
  when parsed.
```

- `tex`, `latex` and `context`

  LaTeX —latex, tex, context

```tex
\documentclass[border=1mm]{standalone}
\usepackage{tikz-timing}
\tikzset{timing/name/.style={font=\sffamily\scriptsize}}
\begin{document}
\begin{tikztimingtable}[timing/slope=0,timing/xunit=15,timing/yunit=15]
	A & 2{8C}; \\
	B & 4{4C}; \\
	C & 8{2C}; \\
	D & 16{C}; \\
	Y & HXLHXHXHXLHHHXXH \\
	\extracode
	\begin{scope}[on background layer]
		\vertlines[help lines, dashed]{}
		\horlines[help lines]{}
		\foreach [count=\x] \b in {0,1,...,15} {
				\node [below,font=\sffamily\bfseries\tiny,inner ysep=2pt] at (\x-.5,-8) {\b};}
	\end{scope}
\end{tikztimingtable}
\end{document}
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

## Wrap the CodeBlock Component

Step 1: Wrap the CodeBlock Component

```bash
npm run docusaurus swizzle @docusaurus/theme-classic CodeBlock -- --wrap
```

Step 2: Edit the Wrapper

```ts
import React from "react";
import CodeBlock from "@theme-original/CodeBlock";

export default function CodeBlockWrapper(props) {
  const { children, className, language } = props;

  // Check if the language is set to 'latex' or 'tex'
  const isLatex =
    className === "language-latex" ||
    language === "latex" ||
    className === "language-tex";

  if (isLatex) {
    // The code content is usually the children string
    const codeContent =
      typeof children === "string" ? children.trim() : children;

    return (
      <div className="overleaf-code-wrapper">
        <CodeBlock {...props} />
        <form
          action="https://www.overleaf.com/docs"
          method="post"
          target="_blank"
          style={{ marginTop: "-12px", marginBottom: "1.5rem" }}
        >
          <input type="hidden" name="snip" value={codeContent} />
          <button
            type="submit"
            className="button button--secondary button--sm"
            style={{
              width: "100%",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: "0.75rem",
              padding: "4px",
            }}
          >
            🍃 Open in Overleaf
          </button>
        </form>
      </div>
    );
  }

  // For all other languages, just return the standard CodeBlock
  return <CodeBlock {...props} />;
}
```

Step 3: Use it Normally
