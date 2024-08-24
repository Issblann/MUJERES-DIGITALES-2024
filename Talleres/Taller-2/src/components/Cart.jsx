import React, { useState } from 'react';
import '../styles/cart.css';
export const Cart = ({ productsAdded }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cart">
      <button onClick={() => setOpen(!open)}>
        <img width={20} height={20} src="../../public/cart.svg" alt="cart" />
      </button>

      {open && (
        <div className="cart-container">
          <p>Esto es lo que llevas de tu carrito</p>

          {productsAdded.map((product) => (
            <div className="productCart-container" key={product.id}>
              <img
                src={product.img}
                alt={product.name}
                width={120}
                height={120}
              />

              <div className="productCart-info">
                <h4>{product.name}</h4>
                <p>$ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
