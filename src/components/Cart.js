import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de importar el contexto correctamente
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, clearCart, totalQuantity, total } = useCart();

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: ${product.price * product.quantity}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart} className='Button'>
        Limpiar carrito
      </button>
      <Link to='/checkout' className='Option'>
        Checkout
      </Link>
    </div>
  );
}

export default Cart;