import React from 'react';
import '../styles/productItem.css';

export const ProductItem = ({ name, price, image, onViewDetails }) => {
  return (
    <div className="productItem-container">
      <h3>{name}</h3>
      <div className="productItem-image-container">
        <img src={image} alt={name} />
      </div>

      <div>
        <p>{`Precio: ${price}`}</p>
      </div>
      <button onClick={onViewDetails}>Ver más</button>
    </div>
  );
};
