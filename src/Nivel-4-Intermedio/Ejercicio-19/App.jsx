import React, { useState, useEffect } from 'react';

function ContadorTitulo(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Contador: {contador}`;

        return () => {
            console.log("El componente se desmontó o el contador cambió");
        };
    }, [contador]);

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}

export default ContadorTitulo;