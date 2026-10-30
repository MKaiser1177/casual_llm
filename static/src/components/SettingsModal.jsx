import React, { useState, useEffect } from 'react';
import { PERSONA_PRESETS, DEFAULT_SETTINGS } from '../constants/presets';

export function SettingsModal({ isOpen, onClose, settings, onSave }) {
  const [draft, setDraft] = useState(settings);

  // Sync draft state with incoming settings whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setDraft(settings);
    }
  }, [isOpen, settings]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePersonaChange = (e) => {
    const newPersona = e.target.value;
    const presetPrompt = PERSONA_PRESETS[newPersona];
    setDraft((prev) => ({
      ...prev,
      persona: newPersona,
      systemPrompt: presetPrompt !== undefined && presetPrompt !== '' ? presetPrompt : prev.systemPrompt
    }));
  };

  const handleReset = () => {
    setDraft({ ...DEFAULT_SETTINGS });
  };

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`settings-modal-backdrop ${isOpen ? 'open' : ''}`}
      id="settingsModalBackdrop"
      onClick={handleBackdropClick}
    >
      <div className="settings-card">
        <div className="settings-header">
          <h3>Inference Settings</h3>
          <button className="icon-btn" id="closeSettingsBtn" onClick={onClose} title="Close Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="settings-body">
          <div className="form-group">
            <label htmlFor="personaSelect">Assistant Persona Preset</label>
            <select
              id="personaSelect"
              className="form-select"
              value={draft.persona}
              onChange={handlePersonaChange}
            >
              <option value="cheerful">Cheerful & Friendly (Default)</option>
              <option value="coding">Expert Python Coder</option>
              <option value="concise">Concise & Direct</option>
              <option value="creative">Creative & Imaginative</option>
              <option value="custom">Custom Persona</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="systemPromptInput">System Prompt</label>
            <textarea
              id="systemPromptInput"
              className="form-textarea"
              rows={3}
              value={draft.systemPrompt}
              onChange={(e) => setDraft((prev) => ({ ...prev, systemPrompt: e.target.value }))}
            />
            <span className="form-help">Guides the model's behavior and personality.</span>
          </div>

          <div className="form-group">
            <div className="range-header">
              <label htmlFor="tempRange">Temperature</label>
              <span className="range-val" id="tempVal">
                {draft.temperature}
              </span>
            </div>
            <input
              type="range"
              id="tempRange"
              min="0.0"
              max="1.5"
              step="0.05"
              value={draft.temperature}
              onChange={(e) => setDraft((prev) => ({ ...prev, temperature: parseFloat(e.target.value) }))}
            />
            <span className="form-help">Lower = more deterministic, higher = more creative.</span>
          </div>

          <div className="form-group">
            <div className="range-header">
              <label htmlFor="tokensRange">Max Output Tokens</label>
              <span className="range-val" id="tokensVal">
                {draft.maxTokens}
              </span>
            </div>
            <input
              type="range"
              id="tokensRange"
              min="32"
              max="512"
              step="16"
              value={draft.maxTokens}
              onChange={(e) => setDraft((prev) => ({ ...prev, maxTokens: parseInt(e.target.value, 10) }))}
            />
            <span className="form-help">Maximum response length generated per turn.</span>
          </div>

          <div className="form-group">
            <div className="range-header">
              <label htmlFor="topPRange">Top-P (Nucleus Sampling)</label>
              <span className="range-val" id="topPVal">
                {draft.topP}
              </span>
            </div>
            <input
              type="range"
              id="topPRange"
              min="0.1"
              max="1.0"
              step="0.05"
              value={draft.topP}
              onChange={(e) => setDraft((prev) => ({ ...prev, topP: parseFloat(e.target.value) }))}
            />
            <span className="form-help">Limits tokens to those with cumulative probability top-p.</span>
          </div>

          <div className="form-group">
            <div className="range-header">
              <label htmlFor="repPenaltyRange">Repetition Penalty</label>
              <span className="range-val" id="repPenaltyVal">
                {draft.repetitionPenalty}
              </span>
            </div>
            <input
              type="range"
              id="repPenaltyRange"
              min="1.0"
              max="1.5"
              step="0.05"
              value={draft.repetitionPenalty}
              onChange={(e) => setDraft((prev) => ({ ...prev, repetitionPenalty: parseFloat(e.target.value) }))}
            />
            <span className="form-help">Penalizes repeated phrases and loops.</span>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn btn-secondary" id="resetDefaultsBtn" onClick={handleReset}>
            Reset to Defaults
          </button>
          <button className="btn btn-primary" id="saveSettingsBtn" onClick={handleSave}>
            Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
}
