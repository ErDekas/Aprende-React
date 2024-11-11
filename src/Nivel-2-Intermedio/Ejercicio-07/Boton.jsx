// Ejercicio-7/Boton.js
import React from 'react';

function Boton({ texto, color }) {
    const estilo = {
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return <button style={estilo}>{texto}</button>;
}

export default Boton;
