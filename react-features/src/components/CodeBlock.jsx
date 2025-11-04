import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Reusable syntax-highlighted code block
 * @param {string} code - Code string to render
 * @param {string} language - Language (default: javascript)
 */
const CodeBlock = ({ code, language = "javascript" }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers
      customStyle={{
        borderRadius: "8px",
        padding: "1rem",
        fontSize: "0.8rem",
        lineHeight: "1.5",
        width: "90%",
        maxWidth: "800px",
        overflowX: "auto",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
