import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-500 text-2xl font-semibold">
          Ecommerce
        </Link>
        <div className="space-x-4">
          <NavLink
            to={`/categoria/Remera`}
            className="text-blue-800"
          >
            Remera
          </NavLink>
          <NavLink
            to={`/categoria/Pantalon`}
            className="text-blue-800"
           
          >
            Pantalon
          </NavLink>
          <NavLink
            to={`/categoria/Buzo`}
            className="text-blue-800"
            
          >
            Buzo
          </NavLink>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
