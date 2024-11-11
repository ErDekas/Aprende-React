import React, { useState } from 'react';

function Checkbox() {
    const [activado, setActivado] = useState(false);

    const manejarCambio = () => {
        setActivado(!activado);
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={activado}
                onChange={manejarCambio}
            />
            <p>{activado ? 'Activado' : 'Desactivado'}</p>
        </div>
    );
}

export default Checkbox;