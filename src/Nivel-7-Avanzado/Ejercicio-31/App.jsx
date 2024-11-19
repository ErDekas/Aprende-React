import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const cambiarTema = () => setTemaOscuro((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ temaOscuro, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

function BotonTema() {
  const { temaOscuro, cambiarTema } = useContext(ThemeContext);

  return (
    <button onClick={cambiarTema}>
      Cambiar a {temaOscuro ? "Tema Claro" : "Tema Oscuro"}
    </button>
  );
}

function AppContent() {
  const { temaOscuro } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: temaOscuro ? "#333" : "#fff",
        color: temaOscuro ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h1>{temaOscuro ? "🌙 Tema Oscuro" : "☀️ Tema Claro"}</h1>
      <BotonTema />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
