import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, removeItem } = useContext(
    CartContext
  );

  if (totalQuantity === 0) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-semibold mb-4">No hay productos en el carrito</h1>
        <Link to="/" className="text-blue-500 hover:underline">Ir a la página de productos</Link>
      </div>
    );
  }

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            product={cartItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total: ${total}</h3>
        <div className="mt-4">
          <button
            onClick={() => clearCart()}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-4 transition duration-300 focus:outline-none focus:ring focus:ring-red-400"
          >
            Limpiar el Carrito
          </button>
          <Link
            to="/checkout"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Ir a Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
