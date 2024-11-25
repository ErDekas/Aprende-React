import React from 'react';
import { useParams } from 'react-router-dom';

const Producto = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Detalles del Prodcuto: {id}</h1>
        </div>
    );
};

export default Producto;