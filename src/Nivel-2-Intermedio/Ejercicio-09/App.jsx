// Ejercicio-9/App.js
import React from 'react';
import Producto from './Producto';

function App() {
    return (
        <div>
            <Producto
                nombre="Camiseta React"
                precio="19.99"
                descripcion="Camiseta cómoda con el logo de React"
            />
            <Producto
                nombre="Taza React"
                precio="9.99"
                descripcion="Taza ideal para tomar café mientras programas"
            />
        </div>
    );
}

export default App;
