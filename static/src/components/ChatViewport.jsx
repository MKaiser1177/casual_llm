import React, { useRef, useEffect } from 'react';
import { WelcomeScreen } from './WelcomeScreen';
import { MessageItem } from './MessageItem';

export function ChatViewport({
  messages = [],
  isGenerating = false,
  streamingResponse = '',
  onSelectPrompt
}) {
  const viewportRef = useRef(null);

  // Auto-scroll to bottom as new messages or streaming chunks arrive
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, streamingResponse, isGenerating]);

  const showWelcome = messages.length === 0 && !isGenerating;

  return (
    <div className="chat-viewport" id="chatViewport" ref={viewportRef}>
      {showWelcome ? (
        <WelcomeScreen onSelectPrompt={onSelectPrompt} />
      ) : (
        <div className="messages-container" id="messagesContainer">
          {messages.map((msg, index) => (
            <MessageItem
              key={index}
              role={msg.role}
              content={msg.content}
            />
          ))}

          {isGenerating && (
            <MessageItem
              role="assistant"
              content={streamingResponse}
              isStreaming={true}
            />
          )}
        </div>
      )}
    </div>
  );
}
