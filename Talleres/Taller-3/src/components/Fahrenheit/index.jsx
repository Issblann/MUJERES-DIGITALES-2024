import React from 'react';

export const Fahrenheit = () => {
  return (
    <div className="temperatures">
      <p>Enter a temperature in Fahrenheit</p>
      <div className="input-container">
        <input className="input" type="text" />
      </div>
    </div>
  );
};
