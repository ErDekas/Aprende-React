import React, { createContext, useReducer, useContext } from "react";

// Acciones del carrito
const ACCIONES = {
  AGREGAR: "AGREGAR",
  ELIMINAR: "ELIMINAR",
  VACIAR: "VACIAR",
};

// Reducer para manejar el estado del carrito
const carritoReducer = (state, action) => {
  switch (action.type) {
    case ACCIONES.AGREGAR:
      return [...state, action.payload];
    case ACCIONES.ELIMINAR:
      return state.filter((producto) => producto.id !== action.payload);
    case ACCIONES.VACIAR:
      return [];
    default:
      return state;
  }
};

// Crear el contexto
const CarritoContext = createContext();

// Provider del carrito
export const CarritoProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(carritoReducer, []);

  const agregarProducto = (producto) => {
    dispatch({ type: ACCIONES.AGREGAR, payload: producto });
  };

  const eliminarProducto = (id) => {
    dispatch({ type: ACCIONES.ELIMINAR, payload: id });
  };

  const vaciarCarrito = () => {
    dispatch({ type: ACCIONES.VACIAR });
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCarrito = () => {
  return useContext(CarritoContext);
};
