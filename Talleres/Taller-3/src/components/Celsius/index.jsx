import React from 'react';

export const Celsius = ({ celsius, handleCelsiusChange }) => {
  return (
    <div className="temperatures">
      <p>Enter a temperature in Celsius</p>
      <div className="input-container">
        <input
          className="input"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
    </div>
  );
};
