import React, { useState } from 'react';

function FormularioSubmit() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}\nEmail: ${email}`)
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormularioSubmit;