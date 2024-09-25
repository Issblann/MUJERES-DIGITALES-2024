import './App.css';
import { useFetch } from './Hook/useFetch';
import { useState } from 'react';

import { AdviceContent } from './components/Advice-content';
import { AdviceButton } from './components/Advice-button';

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

  const handleNewAdvice = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <main className="advice">
      <h6 className="advice__id">ADVICE #{data?.slip.id}</h6>

      <AdviceContent loading={loading} advice={advice} />

      <AdviceButton handleNewAdvice={handleNewAdvice} loading={loading} />
    </main>
  );
}

export default App;
