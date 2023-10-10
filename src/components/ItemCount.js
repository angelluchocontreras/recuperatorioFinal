import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const addToCart = () => {
    if (count === 0) {
      setShowAddToCartMessage(true);
    } else {
      onAdd(count);
      setShowAddToCartMessage(false);
    }
  };

  return (
    <div className="flex items-center  space-x-4">
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={decrement}
          className="bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-3 rounded"
        >
          -
        </button>
        <span className="px-4 font-semibold">{count}</span>
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-3 rounded"
        >
          +
        </button>
      </div>
      <p className="text-gray-700 text-center mb-4">Stock disponible: {stock}</p>
      {showAddToCartMessage ? (
        <p className="text-red-500 text-center mb-4">
          Por favor, seleccione al menos un producto antes de agregar al carrito.
        </p>
      ) : null}
      <div className="flex justify-center">
        <button
          onClick={addToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
