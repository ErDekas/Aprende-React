import React, { useState, useEffect } from 'react';

function App() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
                const datos = await respuesta.json();
                setDatos(datos);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div>
            <h1>Datos de la API</h1>
            <ul>
                {datos.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;