const KEYS = {
  THEME: 'casual_llm_theme',
  SETTINGS: 'casual_llm_settings',
  CONVERSATIONS: 'casual_llm_conversations',
  ACTIVE_ID: 'casual_llm_active_id'
};

export function loadTheme() {
  try {
    return localStorage.getItem(KEYS.THEME) || 'dark';
  } catch {
    return 'dark';
  }
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(KEYS.THEME, theme);
  } catch (err) {
    console.warn('Failed to save theme to localStorage:', err);
  }
}

export function loadSettings(defaultSettings) {
  try {
    const raw = localStorage.getItem(KEYS.SETTINGS);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : { ...defaultSettings };
  } catch {
    return { ...defaultSettings };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.warn('Failed to save settings to localStorage:', err);
  }
}

export function loadConversations() {
  try {
    const raw = localStorage.getItem(KEYS.CONVERSATIONS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveConversations(conversations) {
  try {
    localStorage.setItem(KEYS.CONVERSATIONS, JSON.stringify(conversations));
  } catch (err) {
    console.warn('Failed to save conversations to localStorage:', err);
  }
}

export function loadActiveId() {
  try {
    return localStorage.getItem(KEYS.ACTIVE_ID) || null;
  } catch {
    return null;
  }
}

export function saveActiveId(id) {
  try {
    localStorage.setItem(KEYS.ACTIVE_ID, id);
  } catch (err) {
    console.warn('Failed to save active conversation ID to localStorage:', err);
  }
}
