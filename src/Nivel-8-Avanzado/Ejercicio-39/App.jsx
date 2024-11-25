// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

const Inicio = () => {
  const [redirect, setRedirect] = useState(false);

  // Función para manejar la redirección
  const handleRedirigir = () => {
    setRedirect(true);
  };

  // Si redirigimos, usamos Navigate para redirigir a la página de contacto
  if (redirect) {
    return <Navigate to="/contacto" />;
  }

  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <button onClick={handleRedirigir}>Ir a Contacto</button>
    </div>
  );
};

const Contacto = () => (
  <div>
    <h1>Página de Contacto</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link> | 
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
