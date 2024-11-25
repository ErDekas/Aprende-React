import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Páginas
const Inicio = () => <h1>Bienvenido a mi página</h1>
const SobreMi = () => <h1>Sobre mi</h1>
const Contacto = () => <h1>Contacto</h1>

function App() {
    return (
        <Router>
            <div>
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
