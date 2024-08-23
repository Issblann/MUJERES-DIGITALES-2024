import React from 'react';
import { ProductItem } from './ProductItem';
import '../styles/productList.css';
export const ProductList = ({ products, onViewDetails }) => {
  return (
    <section className="section-productsList">
      <h2>Most popular</h2>
      <div className="productsList-container">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.img}
            category={product.category}
            onViewDetails={() => onViewDetails(product)}
          />
        ))}
      </div>
    </section>
  );
};
