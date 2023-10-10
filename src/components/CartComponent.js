import React, { useContext } from 'react';
import { CartContext } from './ruta/a/CartContext'; // Asegúrate de reemplazar esto con la ruta correcta a tu archivo CartContext
import CartItem from './ruta/a/CartItem'; // Asegúrate de reemplazar esto con la ruta correcta a tu archivo CartItem

const CartComponent = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} quantity={item.quantity} onRemove={removeItem} />
      ))}
    </div>
  );
};

export default CartComponent;
