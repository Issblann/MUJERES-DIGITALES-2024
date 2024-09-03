import React from 'react';

export const Fahrenheit = ({ fahrenheit, handleFahrenheitChange }) => {
  return (
    <div className="temperatures">
      <p>Enter a temperature in Fahrenheit</p>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};
