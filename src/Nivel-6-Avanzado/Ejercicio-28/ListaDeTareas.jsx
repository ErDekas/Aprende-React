import React, { useState } from 'react';

function ListaDeTareas() {
    const [tarea, setTarea] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [editandoIndex, setEditandoIndex] = useState(null);
    const [textoEditado, setTextoEditado] = useState("");

    const agregarTarea = () => {
        if(nuevaTarea.trim() !== ""){
            setTarea([...tarea, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    const eliminarTarea = (index) => {
        setTarea(tarea.filter)((_, i) => i !== index)
    };

    const editarTarea = (index) => {
        setEditandoIndex(index);
        setTextoEditado(tarea[index]);
    };

    const guardarEdicion = (index) => {
        const nuevaTareas = [...tarea];
        nuevaTareas[index] = textoEditado;
        setTarea(nuevaTareas);
        setEditandoIndex(null);
        setTextoEditado("");
    };

    return(
        <div>
            <h1>Lista de Tareas</h1>
            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder='Agregar nueva tarea'  />
            <button onClick={agregarTarea}>Agregar Tarea</button>
            <ul>
                {tarea.map((tarea, index) => (
                    <li key={index}>
                        {editandoIndex === index ? (
                            <>  
                                <input type="text" value={textoEditado} onChange={(e) => setTextoEditado(e.target.value)} />
                                <button onClick={() => guardarEdicion(index)}>Guardar</button>
                            </>
                        ) : (
                            <>
                            {tarea}{" "}
                            <button onClick={() => editarTarea(index)}>Editar</button>
                            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;