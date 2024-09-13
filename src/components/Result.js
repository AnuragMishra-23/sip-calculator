import React from 'react';

const Result = ({ investedAmount, estimatedReturns, totalValue }) => (
  <div className="results">
    <h3>RESULTS</h3>
    <p>Invested amount: ₹{investedAmount.toLocaleString()}</p>
    <p>Estimated returns: ₹{estimatedReturns.toLocaleString()}</p>
    <p>Total value: ₹{totalValue.toLocaleString()}</p>
  </div>
);

export default Result;


