import React, { useState } from "react";

function FormularioCheckboxRadio() {
    const [aceptado, setAceptado] = useState(false);
    const [opcion, setOpcion] = useState("");

    return(
        <div>
            <h2>Checkbox y Radio buttons</h2>
            <input type="checkbox" checked={aceptado} onChange={() => setAceptado(!aceptado)} />
            <label>Acepto términos</label>
            <br />
            <input type="radio" value="Opción 1" checked={opcion === "Opción 1"} onChange={(e) => setOpcion(e.target.value)} />Opción 1
            <input type="radio" value="Opción 2" checked={opcion === "Opción 2"} onChange={(e) => setOpcion(e.target.value)} />Opción 2
            <p>Checkbox: {aceptado ? "Aceptado" : "No aceptado"}</p>
            <p>Radio seleccionado: {opcion}</p>
        </div>
    );
}

export default FormularioCheckboxRadio;