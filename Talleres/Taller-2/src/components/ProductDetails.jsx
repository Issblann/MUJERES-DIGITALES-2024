import React from 'react';
import '../styles/productItem.css';
import '../styles/productDetails.css';
export const ProductDetails = ({
  name,
  price,
  description,
  image,
  category,
}) => {
  return (
    <section className="productDetails-section">
      <h3>{name}</h3>
      <div className="productItem-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="productDetails-container">
        <p className="price">{`Precio: ${price}`}</p>
        <p>{description}</p>
        <p>{`Categoria: ${category}`}</p>
      </div>
      <button className="button-details">Agregar al Carrito</button>
    </section>
  );
};
