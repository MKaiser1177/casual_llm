export const PERSONA_PRESETS = {
  cheerful: "You are a very friendly and cheerful assistant. Always respond in a warm, casual, and encouraging tone.",
  coding: "You are an expert software engineer and Python specialist. Provide concise, clean, well-commented code and clear explanations.",
  concise: "You are a direct, efficient assistant. Answer questions accurately and concisely without unnecessary filler.",
  creative: "You are an imaginative creative writer and conversational partner. Use expressive, colorful, and engaging language.",
  custom: ""
};

export const DEFAULT_SETTINGS = {
  persona: "cheerful",
  systemPrompt: PERSONA_PRESETS.cheerful,
  temperature: 0.7,
  maxTokens: 256,
  topP: 0.85,
  repetitionPenalty: 1.15
};

export const PROMPT_CHIPS = [
  {
    icon: "🪐",
    label: "Fun universe fact",
    prompt: "Tell me a fun and surprising fact about the universe!"
  },
  {
    icon: "🐍",
    label: "Python palindrome script",
    prompt: "Write a clean Python function that checks if a string is a palindrome."
  },
  {
    icon: "✉️",
    label: "Promotion congrats email",
    prompt: "Draft a friendly email congratulating a colleague on their work promotion."
  },
  {
    icon: "🎯",
    label: "Focus and study tips",
    prompt: "Give me 3 practical tips for staying focused while coding or studying."
  }
];
