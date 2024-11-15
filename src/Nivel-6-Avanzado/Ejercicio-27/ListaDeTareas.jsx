import React, { useState } from 'react';

function ListaDeTareas() {
    const [tarea, setTarea] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if(nuevaTarea.trim() !== ""){
            setTarea([...tarea, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tarea.filter((_, i) => i !== index);
        setTarea(nuevasTareas);
    };

    return(
        <div>
            <h1>Lista de Tareas</h1>
            <input type="text" value={nuevaTarea} placeholder='Añadir Tarea' onChange={(e) => setNuevaTarea(e.target.value) } />
            <button onClick={agregarTarea}>AgregarTarea</button>
            <ul>
                {tarea.map((tarea, index) => (
                    <li>
                        {tarea} <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;