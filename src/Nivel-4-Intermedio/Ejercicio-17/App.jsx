import React, { useState, useEffect } from 'react';

function ContadorConMensaje() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log(`El contador ha cambiado: ${contador}`);
    }, [contador]);

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
        </div>
    );
}

export default ContadorConMensaje;