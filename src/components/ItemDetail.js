import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart, CartContextProvider, CartContext  } from '../context/CartContext'; // Importa CartContext correctamente
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addToCart } = useCart(); // Usa useContext para acceder a CartContext

  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
    setQuantityAdded(quantity);
    }
  };

  const handleBuyClick = () => {
    if (quantityAdded > 0) {
      const item = {
        id,
        name,
        price,
      };

      console.log("Botón de comprar presionado");
      addToCart(item, quantityAdded);
    }
    
  };


  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Categoria: {category}</p>
        <p className='Info'>Descripcion: {descripcion}</p>
        <p className='Info'>Precio: ${price}</p>
      </section>
      <footer className='ItemFooter'>

          <>
            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
            <button onClick={handleBuyClick} className='Button'>
              Comprar
            </button>
          </>
      </footer>
    </article>
  );
};

export default ItemDetail;