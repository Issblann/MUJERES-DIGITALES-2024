import React from 'react';
import { Celsius } from '../Celsius';
import { Fahrenheit } from '../Fahrenheit';
import EqualIcon from '../../assets/equal.svg';
import '../../styles/styles.css';
export const CalculatorBase = () => {
  return (
    <>
      <h1>TEMPERATURE CALCULATOR</h1>

      <div className="calculator-base">
        <div className="container-temperatures">
          <Celsius />
          <img src={EqualIcon} width={25} height={25} alt="change-rows" />
          <Fahrenheit />
        </div>
        <p>1°C = 33.8°F</p>
      </div>
    </>
  );
};
