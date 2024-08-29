import React from 'react';
import './styles.css';
const Column = ({ name }) => {
  return (
    <div className="column">
      <h3>{name}</h3>
    </div>
  );
};

export default Column;
