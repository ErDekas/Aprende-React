import React, { useState, useEffect } from 'react';

function DatosApi(){
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setDatos(data.slice(0, 5)))
            .catch((error) => console.error('Error al obtener los datos ', error));
    }, []);

    return(
        <div>
            <h2>Datos de la API</h2>
            <ul>
                {datos.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DatosApi;