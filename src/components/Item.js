import { Link } from "react-router-dom";

const Item = ({ id, name, img, precio, stock }) => {
  return (
    <article className="CardItem bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
      <header>
        <h2 className="text-lg font-semibold text-center mb-5">{name}</h2>
      </header>
      <picture className="mb-2">
        <img src={img} alt={name} className="w-48 h-48 object-contain" />
      </picture>
      <section className="mb-2 text-center">
        <p className="text-gray-700">
          Precio: <span className="font-semibold">${precio}</span>
        </p>
        <p className="text-gray-700">
          Stock disponible:{" "}
          <span className={stock <= 5 ? "text-red-500 font-semibold" : "font-semibold"}>
            {stock}
          </span>
        </p>
      </section>
      <footer className="mt-4">
        <Link
          to={`/item/${id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
        >
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
