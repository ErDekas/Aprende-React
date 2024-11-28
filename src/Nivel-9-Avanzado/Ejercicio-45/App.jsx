import React, { useState, useEffect } from 'react';

function App() {
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const obtenerDatos = async () => {
            setIsLoading(true);
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!respuesta.ok) {
                    throw new Error("No se pudo obtener los datos.");
                }
                const data = await respuesta.json();
                setDatos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        obtenerDatos();
    }, []);
    
    const datosFiltrados = datos.filter((item) => 
    item.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h1>Datos de la API con Filtro</h1>

            {/* Input para la búsqueda */}
            <input
                type="text"
                placeholder="Buscar por título..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{
                    marginBottom: "20px",
                    padding: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    fontSize: "16px",
                }}
            />

            {/* Renderizando Condicional */} 
            {isLoading && <p>Cargando...</p>}
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : datosFiltrados.length === 0 ? (
                <p>No hay datos que coincidan con la búsqueda</p>
            ) : (
                <ul>
                    {datosFiltrados.map((item) => (
                        <li key="{item.id}">{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;