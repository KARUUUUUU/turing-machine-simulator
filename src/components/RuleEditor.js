import React from "react";
import "../css_files/RuleEditor.css";

const RuleEditor = ({ rules, onRuleChange, onAddRule, onRemoveRule }) => {
  return (
    <div className="rule-editor-container">
      <h2>Rule Editor</h2>
      
      {rules.map((rule, index) => (
        <div key={index} className="rule-row">
          <input
            type="text"
            className="rule-input"
            value={rule.currentState}
            onChange={(e) => onRuleChange(index, 'currentState', e.target.value)}
            placeholder="Current State"
          />
          <input
            type="text"
            className="rule-input"
            value={rule.currentSymbol}
            onChange={(e) => onRuleChange(index, 'currentSymbol', e.target.value)}
            placeholder="Current Symbol"
          />
          <input
            type="text"
            className="rule-input"
            value={rule.newSymbol}
            onChange={(e) => onRuleChange(index, 'newSymbol', e.target.value)}
            placeholder="New Symbol"
          />
          <input
            type="text"
            className="rule-input"
            value={rule.direction}
            onChange={(e) => onRuleChange(index, 'direction', e.target.value)}
            placeholder="Direction"
          />
          <input
            type="text"
            className="rule-input"
            value={rule.newState}
            onChange={(e) => onRuleChange(index, 'newState', e.target.value)}
            placeholder="New State"
          />
          <button
            className="remove-rule-button"
            onClick={() => onRemoveRule(index)}
          >
            ×
          </button>
        </div>
      ))}
      
      <button className="add-rule-button" onClick={onAddRule}>
        Add Rule
      </button>
    </div>
  );
};

export default RuleEditor;
