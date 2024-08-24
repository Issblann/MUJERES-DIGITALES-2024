import { useState } from 'react';
import './App.css';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cartProducts = [
    {
      id: 1,
      name: 'Pantalones elegante mujer',
      price: '119.000',
      img: 'https://http2.mlstatic.com/D_NQ_NP_870188-CBT70272111634_072023-O.webp',
    },
    {
      id: 2,
      name: 'Vestido negro fiesta mujer',
      price: '210.000',
      img: 'https://ae-pic-a1.aliexpress-media.com/kf/Sb0ebef7e28114727b32bac73a9f31225e.jpg_640x640Q90.jpg_.webp',
    },
    {
      id: 3,
      name: 'Blusa blanca botones mujer',
      price: '79.900',
      img: 'https://m.media-amazon.com/images/I/61jyDViMqiL.jpg',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Pantalones elegante mujer',
      price: '119.000',
      description:
        'Pantalón para mujer elegante y corporativo. Viene en variedad de colores.',
      category: 'Pantalones',
      img: 'https://http2.mlstatic.com/D_NQ_NP_870188-CBT70272111634_072023-O.webp',
    },
    {
      id: 2,
      name: 'Vestido negro fiesta mujer',
      price: '210.000',
      description:
        'Vestido negro para mujer ideal para fiesta y ocasiones especiales.',
      category: 'Vestidos',
      img: 'https://ae-pic-a1.aliexpress-media.com/kf/Sb0ebef7e28114727b32bac73a9f31225e.jpg_640x640Q90.jpg_.webp',
    },
    {
      id: 3,
      name: 'Blusa blanca botones mujer',
      price: '79.900',
      description: 'Blusa blanca con botones elegante y corporativo.',
      category: 'Blusas',
      img: 'https://m.media-amazon.com/images/I/61jyDViMqiL.jpg',
    },
    {
      id: 4,
      name: 'Camiseta negra botones hombre',
      price: '89.900',
      description:
        'Camiseta para hombre elegante, perfecto para fiestas nocturnas.',
      category: 'Camisetas',
      img: 'https://antoniosclothing.com/cdn/shop/products/product-image-1775831511.jpg?v=1655644940',
    },
    {
      id: 5,
      name: 'Vestido rojo mujer',
      price: '389.900',
      description: 'Vestido rojo para dama de honor.',
      category: 'Vestidos elegantes',
      img: 'https://http2.mlstatic.com/D_NQ_NP_945468-CBT72546176425_102023-O.webp',
    },
    {
      id: 6,
      name: 'Pantalón elegante hombre',
      price: '99.900',
      description:
        'Pantalón para hombre elegante y corporativo. Perfecto para la oficina o espacios formales.',
      category: 'Pantalones',
      img: 'https://http2.mlstatic.com/D_NQ_NP_865746-CBT73920757809_012024-O.webp',
    },
  ];
  const onViewDetails = (product) => {
    console.log('Ver más');
    setSelectedProduct(product);
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };
  const addProductToCart = () => {
    alert('Producto agregado al carrito');
    setSelectedProduct(null);
  };
  return (
    <main>
      <h1>GLOW & BEAUTY</h1>

      <ProductList products={products} onViewDetails={onViewDetails} />
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="close"
              width={24}
              height={24}
              src="../src/assets/close.svg"
              onClick={closeModal}
            />

            <ProductDetails
              name={selectedProduct.name}
              price={selectedProduct.price}
              description={selectedProduct.description}
              image={selectedProduct.img}
              category={selectedProduct.category}
              addProductToCart={addProductToCart}
            />
          </div>
        </div>
      )}
      <Cart productsAdded={cartProducts} />
    </main>
  );
}

export default App;
