import React from "react";

const CartItem = ({ product, quantity, onRemove }) => {
  if (!product) {
    return null;
  }

  const { name, precio } = product;
  const subtotal = precio * quantity;

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <article className="border rounded-lg p-4 mb-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">Precio por unidad: ${precio}</p>
        </div>
        <div className="ml-4">
          <p className="text-gray-600">Cantidad: {quantity}</p>
          <p className="text-gray-600">Subtotal: ${subtotal}</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
      >
        Remover
      </button>
    </article>
  );
};

export default CartItem;
