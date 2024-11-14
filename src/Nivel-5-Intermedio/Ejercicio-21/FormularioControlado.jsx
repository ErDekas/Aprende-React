import React, { useState } from 'react';

function FormularioControlado() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const manejarCambioNombre = (e) => setNombre(e.target.value);
    const manejarCambioEmail = (e) => setEmail(e.target.value);

    return (
        <div>
            <h2>Formulario Controlado</h2>
            <form>
                <input type='text' placeholder='Nombre' value={nombre} onChange={manejarCambioNombre} />
                <input type="email" placeholder='Email' value={email} onChange={manejarCambioEmail} />
            </form>
            <p>Nombre: {nombre}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default FormularioControlado;