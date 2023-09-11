import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, onCheckout }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      onAdd(quantity + 1); // Llama a onAdd con la nueva cantidad
    }
  };
  
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onAdd(quantity - 1); // Llama a onAdd con la nueva cantidad
    }
  };
  

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className='Button' onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Button' onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;