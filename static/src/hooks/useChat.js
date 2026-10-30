import { useState, useEffect, useRef, useCallback } from 'react';
import {
  loadConversations,
  saveConversations,
  loadActiveId,
  saveActiveId
} from '../utils/storage';

export function useChat(settings) {
  const [conversations, setConversations] = useState(() => {
    const saved = loadConversations();
    if (saved.length > 0) return saved;
    return [{
      id: 'conv_' + Date.now(),
      title: 'New Conversation',
      createdAt: new Date().toISOString(),
      messages: []
    }];
  });

  const [activeId, setActiveId] = useState(() => {
    const savedId = loadActiveId();
    const savedConvs = loadConversations();
    if (savedId && savedConvs.some(c => c.id === savedId)) {
      return savedId;
    }
    return savedConvs.length > 0 ? savedConvs[0].id : null;
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [streamingResponse, setStreamingResponse] = useState('');
  const abortControllerRef = useRef(null);

  // Sync activeId if null or invalid
  useEffect(() => {
    if (!activeId && conversations.length > 0) {
      setActiveId(conversations[0].id);
    }
  }, [activeId, conversations]);

  // Persist conversations
  useEffect(() => {
    saveConversations(conversations);
  }, [conversations]);

  // Persist active ID
  useEffect(() => {
    if (activeId) {
      saveActiveId(activeId);
    }
  }, [activeId]);

  const activeConversation = conversations.find(c => c.id === activeId) || conversations[0];

  const createNewConversation = useCallback(() => {
    if (isGenerating) return;
    const newConv = {
      id: 'conv_' + Date.now(),
      title: 'New Conversation',
      createdAt: new Date().toISOString(),
      messages: []
    };
    setConversations(prev => [newConv, ...prev]);
    setActiveId(newConv.id);
  }, [isGenerating]);

  const switchConversation = useCallback((id) => {
    if (isGenerating) return;
    setActiveId(id);
  }, [isGenerating]);

  const deleteConversation = useCallback((id) => {
    setConversations(prev => {
      const filtered = prev.filter(c => c.id !== id);
      if (filtered.length === 0) {
        const fresh = {
          id: 'conv_' + Date.now(),
          title: 'New Conversation',
          createdAt: new Date().toISOString(),
          messages: []
        };
        setActiveId(fresh.id);
        return [fresh];
      }
      if (activeId === id) {
        setActiveId(filtered[0].id);
      }
      return filtered;
    });
  }, [activeId]);

  const clearCurrentChat = useCallback(() => {
    if (isGenerating || !activeId) return;
    setConversations(prev => prev.map(conv => {
      if (conv.id === activeId) {
        return { ...conv, messages: [], title: 'New Conversation' };
      }
      return conv;
    }));
  }, [isGenerating, activeId]);

  const clearAllConversations = useCallback(() => {
    if (isGenerating) return;
    if (window.confirm("Are you sure you want to delete all conversations?")) {
      const fresh = {
        id: 'conv_' + Date.now(),
        title: 'New Conversation',
        createdAt: new Date().toISOString(),
        messages: []
      };
      setConversations([fresh]);
      setActiveId(fresh.id);
    }
  }, [isGenerating]);

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  const sendMessage = useCallback(async (promptText) => {
    const text = (promptText || '').trim();
    if (!text || isGenerating || !activeId) return;

    // Determine new title if this is the first message
    const isFirstMessage = activeConversation && activeConversation.messages.length === 0;
    const newTitle = isFirstMessage ? (text.length > 28 ? text.slice(0, 28) + '...' : text) : null;

    // Append user message immediately
    const userMessage = { role: 'user', content: text };
    let currentMessages = [];

    setConversations(prev => prev.map(conv => {
      if (conv.id === activeId) {
        const updated = {
          ...conv,
          title: newTitle ? newTitle : conv.title,
          messages: [...conv.messages, userMessage]
        };
        currentMessages = updated.messages;
        return updated;
      }
      return conv;
    }));

    setIsGenerating(true);
    setStreamingResponse('');
    const controller = new AbortController();
    abortControllerRef.current = controller;

    let assistantResponse = '';

    try {
      const payloadMessages = currentMessages.map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: payloadMessages,
          system_prompt: settings.systemPrompt,
          temperature: settings.temperature,
          top_p: settings.topP,
          max_new_tokens: settings.maxTokens,
          repetition_penalty: settings.repetitionPenalty
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || `Server error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data:')) {
            const dataStr = trimmed.slice(5).trim();
            if (!dataStr) continue;

            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.token) {
                assistantResponse += parsed.token;
                setStreamingResponse(assistantResponse);
              } else if (parsed.error) {
                throw new Error(parsed.error);
              }
            } catch (err) {
              if (err.message && err.message !== "Unexpected end of JSON input") {
                console.warn("Parse warning:", err.message);
              }
            }
          }
        }
      }

      // Final commit of completed assistant message
      const finalMsg = { role: 'assistant', content: assistantResponse };
      setConversations(prev => prev.map(conv => {
        if (conv.id === activeId) {
          return {
            ...conv,
            messages: [...conv.messages, finalMsg]
          };
        }
        return conv;
      }));

    } catch (err) {
      if (err.name === 'AbortError') {
        const abortedMsg = {
          role: 'assistant',
          content: assistantResponse || '(Generation stopped)'
        };
        setConversations(prev => prev.map(conv => {
          if (conv.id === activeId) {
            return {
              ...conv,
              messages: [...conv.messages, abortedMsg]
            };
          }
          return conv;
        }));
      } else {
        const errorMsg = {
          role: 'assistant',
          content: `Error: ${err.message}`
        };
        setConversations(prev => prev.map(conv => {
          if (conv.id === activeId) {
            return {
              ...conv,
              messages: [...conv.messages, errorMsg]
            };
          }
          return conv;
        }));
      }
    } finally {
      setIsGenerating(false);
      setStreamingResponse('');
      abortControllerRef.current = null;
    }
  }, [activeId, isGenerating, activeConversation, settings]);

  return {
    conversations,
    activeId,
    activeConversation,
    isGenerating,
    streamingResponse,
    createNewConversation,
    switchConversation,
    deleteConversation,
    clearCurrentChat,
    clearAllConversations,
    sendMessage,
    stopGeneration
  };
}
