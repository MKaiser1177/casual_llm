import React from 'react';
import { PROMPT_CHIPS } from '../constants/presets';

export function WelcomeScreen({ onSelectPrompt }) {
  return (
    <div className="welcome-screen" id="welcomeScreen">
      <div className="welcome-card">
        <div className="welcome-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
        <h1>How can I help you today?</h1>
        <p>Casual LLM runs SmolLM2 locally on your machine with fast, warm responses. Choose a starter below or type your own question.</p>

        <div className="prompt-chips">
          {PROMPT_CHIPS.map((chip) => (
            <button
              key={chip.label}
              className="chip"
              data-prompt={chip.prompt}
              onClick={() => onSelectPrompt(chip.prompt)}
            >
              <span className="chip-icon">{chip.icon}</span>
              <span className="chip-text">{chip.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
