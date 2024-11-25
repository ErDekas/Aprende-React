import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Producto from './Producto';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                            <Link to="/producto/1">Producto 1</Link>
                            <Link to="/producto/2">Producto 2</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<h1>Bienvenido a la tienda</h1>} />
                    <Route path='/producto/:id' element={<Producto />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;