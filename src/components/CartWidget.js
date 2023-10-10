import { useContext } from 'react';
import carrito from '../assets/carrito.png';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center space-x-2">
      <Link to="/cart" className="flex items-center">
        <img src={carrito} alt="logo de un carrito" className="h-6 w-6" />
        <span className="ml-1 text-sm">Carrito</span>
      </Link>
      {totalQuantity > 0 && (
        <span className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
