import React, { useState } from 'react';
import { formatMarkdownToReact } from '../utils/markdown';

export function MessageItem({ role, content, isStreaming = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(err => {
      console.warn('Clipboard copy error:', err);
    });
  };

  const isUser = role === 'user';

  return (
    <div className={`message-row ${role}`}>
      <div className="message-avatar">
        {isUser ? 'U' : 'AI'}
      </div>

      <div className="message-bubble-wrapper">
        <div className="message-bubble">
          {formatMarkdownToReact(content)}
          {isStreaming && <span className="typing-cursor" />}
        </div>

        {!isUser && !isStreaming && content && (
          <div className="message-actions">
            <button className="action-chip-btn" onClick={handleCopy} title="Copy response">
              {copied ? (
                '✓ Copied'
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
