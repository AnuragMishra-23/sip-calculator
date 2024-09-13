import React from 'react';

const Slider = ({ label, min, max, step, value, onChange }) => {
  return (
    <div>
      <label>
        {label} <span>{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Slider;
