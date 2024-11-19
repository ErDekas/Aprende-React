import React from "react";
import { useCarrito } from "./CarritoContext";

function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}{" "}
              <button onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      )}
    </div>
  );
}

export default Carrito;
