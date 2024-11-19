import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [temaOscuro, setTemaOscuro] = useState(false);

  // Función para cambiar el tema
  const cambiarTema = () => setTemaOscuro((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ temaOscuro, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Componente principal de la aplicación
function App() {
  const { temaOscuro, cambiarTema } = useContext(ThemeContext);

  // Cambiar el estilo global según el tema
  const estiloPagina = {
    backgroundColor: temaOscuro ? "#333" : "#fff",
    color: temaOscuro ? "#fff" : "#000",
    height: "100vh",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={estiloPagina} onClick={cambiarTema}>
      <h1>{temaOscuro ? "🌙 Tema Oscuro" : "☀️ Tema Claro"}</h1>
    </div>
  );
}

// Exportar la aplicación con el ThemeProvider
function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default RootApp;
