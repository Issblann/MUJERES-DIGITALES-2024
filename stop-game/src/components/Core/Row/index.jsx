import React from 'react';
import './styles.css';
const Row = ({ columns, currentLetter, inputs, setInputs }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="row">
      {columns.map((column, index) =>
        index === 0 ? (
          <div key={column.id} className="letter-field">
            {currentLetter}
          </div>
        ) : (
          <input
            key={column.id}
            type="text"
            placeholder={column.name}
            className="input-field"
            onChange={handleInputChange}
            name={column.name}
          />
        )
      )}
    </div>
  );
};

export default Row;
