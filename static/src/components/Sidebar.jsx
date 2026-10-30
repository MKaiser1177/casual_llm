import React from 'react';

export function Sidebar({
  conversations,
  activeId,
  collapsed,
  mobileOpen,
  onCloseMobile,
  onNewChat,
  onSwitchChat,
  onDeleteChat,
  onOpenSettings,
  onClearAll,
  backendStatus,
  isGenerating
}) {
  const sidebarClasses = [
    'sidebar',
    collapsed ? 'collapsed' : '',
    mobileOpen ? 'mobile-open' : ''
  ].filter(Boolean).join(' ');

  const currentStatusDotClass = isGenerating ? 'generating' : backendStatus.dotClass;
  const currentStatusTitle = isGenerating ? 'Generating...' : backendStatus.title;

  return (
    <aside className={sidebarClasses} id="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <rect x="4" y="8" width="16" height="12" rx="4" />
              <path d="M9 13h.01M15 13h.01M9 17h6" />
            </svg>
          </div>
          <div className="brand-text">
            <h2>Casual LLM</h2>
            <span className="subtext">SmolLM2-360M</span>
          </div>
        </div>
        <button
          className="icon-btn close-sidebar-btn"
          id="closeSidebarBtn"
          title="Close Sidebar"
          onClick={onCloseMobile}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="sidebar-actions">
        <button
          className="btn btn-primary new-chat-btn"
          id="newChatBtn"
          onClick={onNewChat}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>New Chat</span>
        </button>
      </div>

      <div className="sidebar-section-title">Conversations</div>
      <div className="conversations-list" id="conversationsList">
        {conversations.map((conv) => {
          const isActive = conv.id === activeId;
          return (
            <div
              key={conv.id}
              className={`conversation-item ${isActive ? 'active' : ''}`}
              onClick={() => onSwitchChat(conv.id)}
            >
              <span className="conversation-title">
                {conv.title || 'Untitled Chat'}
              </span>
              <button
                className="item-delete-btn"
                title="Delete conversation"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteChat(conv.id);
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <div className="status-indicator-card">
          <div className="status-dot-wrapper">
            <span className={`status-dot ${currentStatusDotClass}`} id="sidebarStatusDot" />
          </div>
          <div className="status-text">
            <div className="status-title" id="sidebarStatusTitle">
              {currentStatusTitle}
            </div>
            <div className="status-sub">PyTorch CPU</div>
          </div>
        </div>

        <div className="sidebar-footer-buttons">
          <button
            className="footer-btn"
            id="openSettingsBtn"
            title="Inference Settings"
            onClick={onOpenSettings}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>Settings</span>
          </button>

          <button
            className="footer-btn"
            id="clearAllChatsBtn"
            title="Clear All History"
            onClick={onClearAll}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Clear All</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
