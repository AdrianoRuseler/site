import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';

export default function CodeBlockWrapper(props) {
  const { children, className, language } = props;

  // Check if the language is set to 'latex' or 'tex'
  const isLatex = className === 'language-latex' || language === 'latex' || className === 'language-tex';

  if (isLatex) {
    // The code content is usually the children string
    const codeContent = typeof children === 'string' ? children.trim() : children;

    return (
      <div className="overleaf-code-wrapper">
        <CodeBlock {...props} />
        <form
          action="https://www.overleaf.com/docs"
          method="post"
          target="_blank"
          style={{ marginTop: '-12px', marginBottom: '1.5rem' }}
        >
          <input type="hidden" name="snip" value={codeContent} />
          <button
            type="submit"
            className="button button--secondary button--sm"
            style={{
              width: '100%',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontSize: '0.75rem',
              padding: '4px'
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
