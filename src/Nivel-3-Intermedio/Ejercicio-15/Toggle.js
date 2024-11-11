import React, { useState } from 'react';

function Toggle() {
    const [estado, setEstado] = useState('Apagar');

    const alternaEstado = () => {
        setEstado(estado === 'Apagar' ? 'Encender' : 'Apagar');
    } 

    return(
        <div>
            <button onClick={alternaEstado}>{estado}</button>
        </div>
    );
}

export default Toggle;