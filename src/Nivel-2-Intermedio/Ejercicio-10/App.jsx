import React from 'react';

function App() {
    const manejarClick = () => {
        console.log('El boton fue clickado');
    }

    return (
        <div>
            <button onClick={manejarClick} style={{ padding: '18px', fontSize: '18px', cursor: 'pointer' }}>
                Haz click aqui
            </button>
        </div>
    );
}

export default App;