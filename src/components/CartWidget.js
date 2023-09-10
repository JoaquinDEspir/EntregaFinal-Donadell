import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <div style={{ color: 'black' }}>
      <Link to='/cart' className="material-symbols-outlined" style= {{display: totalQuantity > 0 ? 'Block' : 'none'}}>
        shopping_cart{' '}
        <span style={{ fontSize: 'smaller' }}>{totalQuantity}</span>
      </Link>
    </div>
  );
}

export default CartWidget;






