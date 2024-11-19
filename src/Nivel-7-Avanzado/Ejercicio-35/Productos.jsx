import React, { useState } from "react";
import { useCarrito } from "./CarritoContext";

function Productos() {
  const { agregarProducto } = useCarrito();

  // Estado local para manejar el formulario y el ID autoincrementable
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
  });

  const [idAutoincrementable, setIdAutoincrementable] = useState(1);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const agregarNuevoProducto = () => {
    if (!nuevoProducto.nombre.trim() || isNaN(Number(nuevoProducto.precio))) {
      alert("Por favor, ingresa un nombre válido y un precio numérico.");
      return;
    }

    // Crear un nuevo producto con ID autoincrementable
    const productoConId = {
      id: idAutoincrementable,
      nombre: nuevoProducto.nombre,
      precio: parseFloat(nuevoProducto.precio),
    };

    // Actualizar el estado con el nuevo producto
    setProductos([...productos, productoConId]);
    setIdAutoincrementable(idAutoincrementable + 1);

    // Limpiar el formulario
    setNuevoProducto({ nombre: "", precio: "" });
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={nuevoProducto.nombre}
          onChange={manejarCambio}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio del producto"
          value={nuevoProducto.precio}
          onChange={manejarCambio}
        />
        <button onClick={agregarNuevoProducto}>Agregar Producto</button>
      </div>

      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}{" "}
            <button onClick={() => agregarProducto(producto)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
