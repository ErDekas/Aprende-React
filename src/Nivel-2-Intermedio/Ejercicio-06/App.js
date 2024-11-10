// Ejercicio-6/App.js
import React from 'react';
import Tareas from './Tareas';

function App() {
  const tareas = ['Estudiar React', 'Comprar comida', 'Hacer ejercicio'];
  
  return (
    <div>
      <Tareas tareas={tareas} />
    </div>
  );
}

export default App;
