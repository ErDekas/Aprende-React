import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const Inicio = () => <h1>Bienvenido a la página de Inicio</h1>;

const Login = ({ login }) => (
  <div>
    <h1>Iniciar sesión</h1>
    <button onClick={login}>Iniciar Sesión</button>
  </div>
);

const Perfil = () => <h1>Bienvenido a tu perfil</h1>;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/perfil"
            element={isAuthenticated ? <Perfil /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
