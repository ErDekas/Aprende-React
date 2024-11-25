import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Inicio = () => <h1>Bienvenido a mi Página</h1>
const SobreMi = () => <h1>Sobre Mi</h1>
const Contacto = () => <h1>Contacto</h1>

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/sobre-mi">Sobre Mi</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;