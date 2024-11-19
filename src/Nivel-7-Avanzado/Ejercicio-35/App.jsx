import React from "react";
import { CarritoProvider } from "./CarritoContext";
import Productos from "./Productos";
import Carrito from "./Carrito";

function App() {
  return (
    <CarritoProvider>
      <div>
        <h1>🛒 Aplicación de Carrito</h1>
        <Productos />
        <Carrito />
      </div>
    </CarritoProvider>
  );
}

export default App;