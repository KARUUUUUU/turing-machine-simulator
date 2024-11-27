import React, { useState } from 'react';
import Tape from './components/Tape';
import Controls from './components/Control';
import RuleEditor from './components/RuleEditor';
import './App.css';

const App = () => {
  const [tape, setTape] = useState(['-', '-', '-', '0', '0', '1', '1', '-', '-', '-']);
  const [headPosition, setHeadPosition] = useState(3);
  const [currentState, setCurrentState] = useState('0');
  const [rules, setRules] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const stepSimulation = () => {
    const currentSymbol = tape[headPosition];
    const rule = rules.find(r => 
      r.currentState === currentState && 
      r.currentSymbol === currentSymbol
    );

    if (rule) {
      const newTape = [...tape];
      newTape[headPosition] = rule.newSymbol;
      setTape(newTape);
      setCurrentState(rule.newState);
      setHeadPosition(prev => 
        rule.direction === 'R' ? prev + 1 : prev - 1
      );
      return true;
    } else {
      alert(`No rule applies for state "${currentState}" and symbol "${currentSymbol}"`);
      setIsRunning(false);
      return false;
    }
  };

  const playSimulation = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      const success = stepSimulation();
      if (!success || currentState === 'halt') {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 500);
  };

  const resetSimulation = () => {
    setTape(['-', '-', '-', '0', '0', '1', '1', '-', '-', '-']);
    setHeadPosition(3);
    setCurrentState('0');
    setIsRunning(false);
  };

  const handleTapeInput = (e) => {
    const input = e.target.value;
    const newTape = ['-', '-', '-', ...input.split(''), '-', '-', '-'];
    setTape(newTape);
    setHeadPosition(3);
    setCurrentState('0');
  };

  const handleRuleChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index] = {
      ...updatedRules[index],
      [field]: value
    };
    setRules(updatedRules);
  };

  const handleAddRule = () => {
    setRules([
      ...rules,
      {
        currentState: '',
        currentSymbol: '',
        newSymbol: '',
        direction: '',
        newState: ''
      }
    ]);
  };

  const handleRemoveRule = (index) => {
    const updatedRules = rules.filter((_, i) => i !== index);
    setRules(updatedRules);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="machine-box">
          <h1>Turing Machine Simulator</h1>
          <Tape tape={tape} headPosition={headPosition} />
          <Controls
            onPlay={playSimulation}
            onStep={stepSimulation}
            onReset={resetSimulation}
            onInputChange={handleTapeInput}
          />
          <RuleEditor
            rules={rules}
            onRuleChange={handleRuleChange}
            onAddRule={handleAddRule}
            onRemoveRule={handleRemoveRule}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

