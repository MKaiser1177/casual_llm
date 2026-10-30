import React, { useState, useRef, useEffect } from 'react';

export function InputPanel({ isGenerating, onSendMessage, onStop }) {
  const [inputText, setInputText] = useState('');
  const textareaRef = useRef(null);

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 160) + 'px';
    }
  }, [inputText]);

  // Focus textarea when done generating
  useEffect(() => {
    if (!isGenerating && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isGenerating]);

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (!trimmed || isGenerating) return;
    onSendMessage(trimmed);
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const charCount = inputText.length;
  const isSendDisabled = !inputText.trim() || isGenerating;

  return (
    <div className="input-panel">
      {isGenerating && (
        <div className="stop-generating-container" id="stopContainer" style={{ display: 'flex' }}>
          <button className="stop-btn" id="stopBtn" onClick={onStop}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
            <span>Stop generating</span>
          </button>
        </div>
      )}

      <div className="input-box-wrapper">
        <textarea
          ref={textareaRef}
          id="chatInput"
          className="chat-textarea"
          placeholder="Type your message... (Enter to send, Shift+Enter for newline)"
          rows="1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="send-btn"
          id="sendBtn"
          title="Send message"
          disabled={isSendDisabled}
          onClick={handleSend}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <div className="input-footer">
        <span>SmolLM2-360M-Instruct</span>
        <span className="footer-separator">•</span>
        <span>FastAPI Deployment</span>
        <span className="footer-separator">•</span>
        <span id="charCount">
          {charCount} character{charCount === 1 ? '' : 's'}
        </span>
      </div>
    </div>
  );
}
