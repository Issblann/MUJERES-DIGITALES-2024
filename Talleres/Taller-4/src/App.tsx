import { useState } from 'react';
import PatternDivider from './assets/pattern-divider-mobile.svg';
import PatternDividerDesktop from './assets/pattern-divider-desktop.svg';
import IconDice from './assets/icon-dice.svg';
import './App.css';

function App() {
  return (
    <main className="container">
      <small className="title-small">ADVICE #117</small>
      <div className="container-title-divider">
        <p className="title-quote">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>

        <img
          className="svg-divider"
          src={PatternDivider}
          alt="PatternDivider"
        />
        <img
          className="svg-divider-desktop"
          src={PatternDividerDesktop}
          alt="PatternDividerDesktop"
        />
      </div>

      <button className="button-dice">
        <img src={IconDice} alt="icon-dice" />
      </button>
    </main>
  );
}

export default App;
