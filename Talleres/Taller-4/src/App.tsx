import PatternDivider from './assets/pattern-divider-mobile.svg';
import PatternDividerDesktop from './assets/pattern-divider-desktop.svg';
import IconDice from './assets/icon-dice.svg';
import './App.css';
import { useFetch } from './Hook/useFetch';
import { useState } from 'react';

type Advice = {
  slip: {
    advice: string;
    id: number;
  };
};

function App() {
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const { data, error, loading } = useFetch<Advice>(
    'https://api.adviceslip.com/advice',
    refreshKey
  );

  if (error) return <p>{error.message}</p>;
  const advice = data?.slip?.advice;
  console.log(advice);
  console.log(loading);
  const handleNewAdvice = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <main className="container">
      <small className="title-small">ADVICE #117</small>
      <div className="container-title-divider">
        {loading ? (
          <p className="title-quote">Loading...</p>
        ) : (
          <p className="title-quote">{advice}</p>
        )}

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

      <button
        onClick={handleNewAdvice}
        disabled={loading}
        className="button-dice"
      >
        <img src={IconDice} alt="icon-dice" />
      </button>
    </main>
  );
}

export default App;
