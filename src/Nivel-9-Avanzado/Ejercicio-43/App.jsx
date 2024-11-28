import React, { useEffect, useState } from 'react';

function App() {
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const obtenerDatos = async () => {
            setIsLoading(true);
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts?_delay=2000");
                if(!respuesta.ok) {
                    throw new Error("No se pudo obtener los datos.")
                }
                const data = await respuesta.json();
                setDatos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        obtenerDatos([]);
    }, []);

    return (
        <div>
            <h1>Datos  de la API con Estado de Carga</h1>
            {isLoading && <p>Cargando...</p>} {/* Muestra el estado de carga*/}
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {datos.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;