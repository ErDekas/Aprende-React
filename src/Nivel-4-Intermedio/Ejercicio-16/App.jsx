import React, { useEffect } from 'react';

function MensajeConsola() {
    useEffect(()=>{
        console.log("El componente se ha renderizado");
   });

   return <h1>Hola, revisa la consola para ver el mensaje</h1>
}

export default MensajeConsola;