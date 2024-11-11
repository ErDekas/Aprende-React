import React, { useState } from 'react';

function InputTexto(){
    const [texto, setTexto] = useState('');

    const manejarCambio = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div>
            <input
                type='text'
                value={texto}
                onChange={manejarCambio}
            />
            <p>Texto ingresado: {texto}</p>
        </div>
    );
}

export default InputTexto;