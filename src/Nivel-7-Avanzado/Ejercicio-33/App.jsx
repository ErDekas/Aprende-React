import React, { createContext, useState, useContext } from "react";

// Crear contexto
const FavoritosContext = createContext();

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (item) => setFavoritos([...favoritos, item]);
  const eliminarFavorito = (item) =>
    setFavoritos(favoritos.filter((fav) => fav !== item));

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

function ListaFavoritos() {
  const { favoritos } = useContext(FavoritosContext);
  return (
    <ul>
      {favoritos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function AgregarFavorito() {
  const { agregarFavorito } = useContext(FavoritosContext);
  const [nuevoFavorito, setNuevoFavorito] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nuevoFavorito}
        onChange={(e) => setNuevoFavorito(e.target.value)}
        placeholder="Añadir a favoritos"
      />
      <button onClick={() => agregarFavorito(nuevoFavorito)}>Agregar</button>
    </div>
  );
}

function App() {
  return (
    <FavoritosProvider>
      <h1>Favoritos</h1>
      <AgregarFavorito />
      <ListaFavoritos />
    </FavoritosProvider>
  );
}

export default App;
