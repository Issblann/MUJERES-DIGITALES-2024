import React from 'react';

export const Celsius = () => {
  return (
    <div className="temperatures">
      <p>Enter a temperature in Celsius</p>
      <div className="input-container">
        <input className="input" type="number" />
      </div>
    </div>
  );
};
