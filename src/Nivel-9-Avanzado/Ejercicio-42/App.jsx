import React, { useState, useEffect } from 'react';

function App() {
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!respuesta.ok){
                    throw new Error("No se pudo obtener los datos.");
                }
                const data = await respuesta.json();
                setDatos(data);
            } catch (error) {
                setError(error.message);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div>
            <h1>Datos de la API</h1>
            {error ? <p style={{ color: 'red' }}>{error}</p> : (
                <ul>
                    {datos.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default App;