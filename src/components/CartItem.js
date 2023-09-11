import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { updateCartItemQuantity, removeItemFromCart } = useCart(); 

  const handleIncreaseQuantity = () => {
    updateCartItemQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateCartItemQuantity(id, quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="CartItem">
      <img src={img} alt={name} className="CartItemImg" />
      <div className="CartItemDetails">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <div className="CartItemQuantity">
          <button onClick={handleDecreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button onClick={handleRemoveItem}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;