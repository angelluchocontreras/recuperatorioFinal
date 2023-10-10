import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const Checkout = () => {
  const { clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateRandomOrderId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const orderIdLength = 8;
    let result = "ORD-";
    for (let i = 0; i < orderIdLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular la creación de una orden
    setIsLoading(true);
    setTimeout(() => {
      const newOrderId = generateRandomOrderId();
      setOrderId(newOrderId);
      setIsLoading(false);
      clearCart(); // Limpiar el carrito después de crear la orden (puedes ajustar esto según tus necesidades)
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-1">
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Crear Orden
        </button>
      </form>
      {isLoading ? (
        <p className="mt-4">Se está generando su orden...</p>
      ) : orderId ? (
        <p className="mt-4">
          Su orden ha sido creada. Número de orden: {orderId}
        </p>
      ) : null}
      
    </div>
  );
};

export default Checkout;
