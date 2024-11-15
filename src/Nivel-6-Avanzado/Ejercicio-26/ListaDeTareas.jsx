import React, { useState } from 'react';

function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== ""){
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea("");
    }
    }
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder='Nueva Tarea'
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;