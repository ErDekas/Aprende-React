import React, { useState } from 'react';

function Contadores() {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const incrementar1 = () => setContador1(contador1 + 1);
    const incrementar2 = () => setContador2(contador2 + 1);

    return(
        <div>
            <div>
                <p>Contador 1: {contador1}</p>
                <button onClick={incrementar1}>Incrementar el 1</button>
            </div>
            <div>
                
            <p>Contador 2: {contador2}</p>
                <button onClick={incrementar2}>Incrementar el 2</button>
            </div>
        </div>
    );
}

export default Contadores;