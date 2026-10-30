import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { ChatViewport } from './components/ChatViewport';
import { InputPanel } from './components/InputPanel';
import { SettingsModal } from './components/SettingsModal';
import { useBackendHealth } from './hooks/useBackendHealth';
import { useChat } from './hooks/useChat';
import { DEFAULT_SETTINGS } from './constants/presets';
import {
  loadTheme,
  saveTheme,
  loadSettings,
  saveSettings as persistSettings
} from './utils/storage';

export function App() {
  // Theme state
  const [theme, setTheme] = useState(loadTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Settings state
  const [settings, setSettings] = useState(() => loadSettings(DEFAULT_SETTINGS));
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSaveSettings = useCallback((newSettings) => {
    setSettings(newSettings);
    persistSettings(newSettings);
  }, []);

  // Sidebar responsiveness state
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    if (window.innerWidth <= 768) {
      setMobileOpen(prev => !prev);
    } else {
      setCollapsed(prev => !prev);
    }
  }, []);

  const closeMobileSidebar = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Custom hooks for backend health and chat session
  const backendStatus = useBackendHealth();
  const chat = useChat(settings);

  return (
    <div className="app-layout">
      <Sidebar
        conversations={chat.conversations}
        activeId={chat.activeId}
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={closeMobileSidebar}
        onNewChat={chat.createNewConversation}
        onSwitchChat={chat.switchConversation}
        onDeleteChat={chat.deleteConversation}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onClearAll={chat.clearAllConversations}
        backendStatus={backendStatus}
        isGenerating={chat.isGenerating}
      />

      <main className="main-content">
        <TopNav
          onToggleSidebar={toggleSidebar}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onClearChat={chat.clearCurrentChat}
          onToggleTheme={toggleTheme}
        />

        <ChatViewport
          messages={chat.activeConversation ? chat.activeConversation.messages : []}
          isGenerating={chat.isGenerating}
          streamingResponse={chat.streamingResponse}
          onSelectPrompt={chat.sendMessage}
        />

        <InputPanel
          isGenerating={chat.isGenerating}
          onSendMessage={chat.sendMessage}
          onStop={chat.stopGeneration}
        />
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />
    </div>
  );
}

export default App;
