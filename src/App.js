import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Graph from './components/Graph';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('SIP');
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="left-container">
          <Graph investedAmount={investedAmount} estimatedReturns={estimatedReturns} />
        </div>
        <div className="right-container">
          <Calculator
            activeTab={activeTab}
            setInvestedAmount={setInvestedAmount}
            setEstimatedReturns={setEstimatedReturns}
          />
          <button
            className="switch-button"
            onClick={() =>
              setActiveTab(activeTab === 'SIP' ? 'Lumpsum' : 'SIP')
            }
          >
            Switch to {activeTab === 'SIP' ? 'Lumpsum' : 'SIP'} Calculator
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

