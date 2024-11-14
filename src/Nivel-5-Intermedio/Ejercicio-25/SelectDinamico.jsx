import React, { useState } from "react";

function SelectDinamico() {
    const [pais, setPaises] = useState("");
    const paises = ["España", "México", "Argentina", "Colombia"];

    return(
        <div>
            <h2>Select Dinamico</h2>
            <select value={pais} onChange={(e) => setPaises(e.target.value)}>
                <option value="">Selecciona un pais</option>
                {paises.map((pais) => (
                    <option key={pais} value={pais}>{pais}</option>
                ))}
            </select>
            <p>Pais Seleccionado: {pais}</p>
        </div>
    );
}

export default SelectDinamico;