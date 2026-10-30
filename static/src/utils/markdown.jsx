import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

/**
 * Parses inline markdown: bold (**text**), italic (*text*), and inline code (`code`).
 */
function parseInline(text) {
  if (!text) return null;

  // Regex matching inline code, bold, or italic
  const inlineRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(inlineRegex);

  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith('`') && part.endsWith('`') && part.length > 1) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 3) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

/**
 * Parses a paragraph with line breaks (<br />).
 */
function parseParagraph(paragraphText, pIndex) {
  const lines = paragraphText.split('\n');
  return (
    <p key={pIndex}>
      {lines.map((line, lIndex) => (
        <React.Fragment key={lIndex}>
          {parseInline(line)}
          {lIndex < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
}

/**
 * Formats markdown into React elements (CodeBlocks and Paragraphs).
 */
export function formatMarkdownToReact(rawText) {
  if (!rawText) return null;

  const codeBlockRegex = /```([a-zA-Z0-9_\-#+.]*)?\n([\s\S]*?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(rawText)) !== null) {
    const textBefore = rawText.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push({ type: 'text', content: textBefore });
    }
    parts.push({
      type: 'code',
      lang: match[1] || 'text',
      content: match[2]
    });
    lastIndex = match.index + match[0].length;
  }

  const remaining = rawText.slice(lastIndex);
  if (remaining) {
    parts.push({ type: 'text', content: remaining });
  }

  return parts.map((part, index) => {
    if (part.type === 'code') {
      return <CodeBlock key={`code-${index}`} lang={part.lang} code={part.content} />;
    }
    const paragraphs = part.content.split(/\n\s*\n/);
    return (
      <React.Fragment key={`text-${index}`}>
        {paragraphs.map((p, pIndex) => {
          if (!p.trim()) return null;
          return parseParagraph(p, `p-${index}-${pIndex}`);
        })}
      </React.Fragment>
    );
  });
}
