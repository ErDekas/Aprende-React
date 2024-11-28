import React, { useState, useEffect } from "react";

function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      setIsLoading(true);
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=0"
        );
        if (!respuesta.ok) {
          throw new Error("No se pudo obtener los datos");
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

  return (
    <div>
        <h1>Datos de la API con Mensaje Condicional</h1>
        {isLoading && <p>Cargando...</p>}
        {error ? (
            <p style={{ color: "red" }}>{error}</p>
        ) : datos.length === 0 ? ( // Verifica si no hay datos
            <p>No hay datos disponibles.</p>    
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