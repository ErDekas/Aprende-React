// Ejercicio-9/Producto.js
import React from 'react';

function Producto({ nombre, precio, descripcion }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p><strong>Precio:</strong> ${precio}</p>
        </div>
    );
}

export default Producto;
