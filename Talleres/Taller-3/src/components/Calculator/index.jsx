import React, { useState } from 'react';
import { Celsius } from '../Celsius';
import { Fahrenheit } from '../Fahrenheit';
import EqualIcon from '../../assets/equal.svg';
import '../../styles/styles.css';
import WaterBoil from '../../assets/water-boil.png';
import WaterNoBoil from '../../assets/water-no-boil.png';

export const CalculatorBase = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit(32);
    } else {
      setFahrenheit(celsiusToFahrenheit(value).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius(0);
    } else {
      setCelsius(fahrenheitToCelsius(value).toFixed(2));
    }
  };
  return (
    <>
      <h1>TEMPERATURE CALCULATOR</h1>

      <div className="calculator-base">
        <div className="container-temperatures">
          <Celsius
            celsius={celsius}
            handleCelsiusChange={handleCelsiusChange}
          />
          <img src={EqualIcon} width={25} height={25} alt="change-rows" />
          <Fahrenheit
            fahrenheit={fahrenheit}
            handleFahrenheitChange={handleFahrenheitChange}
          />
        </div>
        <p>1°C = 33.8°F</p>

        {celsius >= 100 ? (
          <div className="result-message-image">
            <p>The water would boil</p>
            <img src={WaterBoil} alt="water-boil" width={300} height={150} />
          </div>
        ) : (
          <div className="result-message-image">
            <p>The water would not boil</p>
            <img
              src={WaterNoBoil}
              alt="water-no-boil"
              width={250}
              height={150}
            />
          </div>
        )}
      </div>
    </>
  );
};
