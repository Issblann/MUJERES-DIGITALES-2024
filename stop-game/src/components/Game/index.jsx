import React, { useEffect, useState } from 'react';
import { COLUMNS } from '../../constants';
import Column from '../Core/Column';
import Row from '../Core/Row';
import { getRandomLetter } from '../../utils';
import './styles.css';
export const Game = () => {
  const [rows, setRows] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('');
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const letter = getRandomLetter();
    setCurrentLetter(letter);
  }, []);

  const handleAddRow = () => {
    setRows([...rows, {}]);
  };

  const printInputs = () => {
    console.log(inputs);
  };

  return (
    <div className="game-container">
      <h1>Juego de Stop</h1>

      <div className="column-container">
        {COLUMNS.map((column) => (
          <Column key={column.id} name={column.name} />
        ))}
      </div>

      <div className="rows-container">
        {rows.map((_, index) => (
          <Row
            key={index}
            columns={COLUMNS}
            currentLetter={currentLetter}
            inputs={inputs}
            setInputs={setInputs}
          />
        ))}
      </div>

      <div className="buttons-container">
        <button className="add-row" onClick={handleAddRow}>
          Agregar Fila
        </button>
        <button className="end-game" onClick={printInputs}>
          Terminar Juego
        </button>
      </div>
    </div>
  );
};
