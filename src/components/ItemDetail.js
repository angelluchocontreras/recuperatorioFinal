import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext"; 
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, categoria, descripcion, precio, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addItem } = useContext(CartContext); 

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    setShowConfirmation(true);
  }

  const handleConfirmAddToCart = () => {
    const quantity = quantityAdded;
    addItem({ id, name, precio, cantidad: quantity }); 
    setShowConfirmation(false); 
  }

  const handleCancelAddToCart = () => {
    setShowConfirmation(false);
  }

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <header>
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="w-48 h-48 object-contain mb-2" />
      </picture>
      <section className="mb-4">
        <p className="text-gray-700">
          Categoría: <span className="font-semibold">{categoria}</span>
        </p>
        <p className="text-gray-700">
          Descripción: <span className="font-semibold">{descripcion}</span>
        </p>
        <p className="text-gray-700">
          Precio: <span className="font-semibold">${precio}</span>
        </p>
      </section>
      <footer>
        {showConfirmation ? (
          <div>
            <p className="text-center mb-2">
              ¿Estás seguro de agregar {quantityAdded} {quantityAdded === 1 ? 'producto' : 'productos'} al carrito?
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleConfirmAddToCart}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 transition duration-300"
              >
                <Link to='/cart'>Sí</Link>
              </button>
              <button
                onClick={handleCancelAddToCart}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded transition duration-300"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
