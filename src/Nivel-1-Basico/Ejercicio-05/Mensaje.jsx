import React from 'react';

function Mensaje({ esVisible }) {
    return (
        <div>
            {esVisible ? <p>El mensaje es visible</p> : <p>El mensaje no es visible</p>}
        </div>
    );
}

export default Mensaje;