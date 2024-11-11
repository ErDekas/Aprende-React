import React, { useState, useEffect } from 'react';

function Temporizador() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
            console.log("Temporizador detenido.")
        }
    },[]);

    return (
        <div>
            <h2>Segundos: {segundos}</h2>
        </div>
    );
}

export default Temporizador;