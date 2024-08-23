import React from 'react';

export const Cart = ({ productsAdded }) => {
  return (
    <div>
      <h1>Carrito</h1>
      <div>
        {productsAdded.map((product) => (
          <div key={product.name}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
