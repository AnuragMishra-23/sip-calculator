import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Result from './Result';

const Calculator = ({ activeTab, setInvestedAmount, setEstimatedReturns }) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [annualReturnRate, setAnnualReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const calculateSIP = (p, r, n) => {
    const monthlyRate = r / 12 / 100;
    const months = n * 12;
    const amount = p * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
    return amount.toFixed(2);
  };

  const calculateLumpsum = (p, r, n) => {
    const amount = p * (1 + r / 100) ** n;
    return amount.toFixed(2);
  };

  const investedAmount = activeTab === 'SIP'
    ? monthlyInvestment * timePeriod * 12
    : investmentAmount;
  const totalValue = activeTab === 'SIP'
    ? calculateSIP(monthlyInvestment, annualReturnRate, timePeriod)
    : calculateLumpsum(investmentAmount, annualReturnRate, timePeriod);
  const estimatedReturns = (totalValue - investedAmount).toFixed(2);

  useEffect(() => {
    setInvestedAmount(investedAmount);
    setEstimatedReturns(estimatedReturns);
  }, [investedAmount, estimatedReturns, setInvestedAmount, setEstimatedReturns]);

  return (
    <div className="calculator-content">
      <h1>{activeTab === 'SIP' ? 'SIP Calculator' : 'Lumpsum Calculator'}</h1>
      {activeTab === 'SIP' ? (
        <Slider
          label="Monthly investment (₹)"
          min={1000}
          max={100000}
          step={1000}
          value={monthlyInvestment}
          onChange={setMonthlyInvestment}
        />
      ) : (
        <Slider
          label="Investment amount (₹)"
          min={1000}
          max={10000000}
          step={1000}
          value={investmentAmount}
          onChange={setInvestmentAmount}
        />
      )}
      <Slider
        label="Expected return rate (p.a) (%)"
        min={1}
        max={30}
        step={0.1}
        value={annualReturnRate}
        onChange={setAnnualReturnRate}
      />
      <Slider
        label="Time period (years)"
        min={1}
        max={30}
        step={1}
        value={timePeriod}
        onChange={setTimePeriod}
      />
      <Result
        investedAmount={investedAmount}
        estimatedReturns={estimatedReturns}
        totalValue={totalValue}
      />
    </div>
  );
};

export default Calculator;

