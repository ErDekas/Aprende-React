// Ejercicio-6/Tareas.js
import React from 'react';

function Tareas({ tareas }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
