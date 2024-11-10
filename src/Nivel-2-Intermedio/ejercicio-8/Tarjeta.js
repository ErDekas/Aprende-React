// Ejercicio-8/Tarjeta.js
import React from 'react';

function Tarjeta({ title, children }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
}

export default Tarjeta;
