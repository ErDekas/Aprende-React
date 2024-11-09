import React from 'react';
import Mensaje from './Mensaje';

function App(){
    return (
        <div>
            <Mensaje esVisible={true} />
            <Mensaje esVisible={false} />
        </div>
    );
}

export default App;