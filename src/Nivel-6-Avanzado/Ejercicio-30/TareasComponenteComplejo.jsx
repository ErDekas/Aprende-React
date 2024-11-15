import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [...state, action.payload];
    case "ELIMINAR_TAREA":
      return state.filter((_, index) => index !== action.payload);
    case "EDITAR_TAREA":
      const nuevasTareas = [...state];
      nuevasTareas[action.payload.index] = action.payload.texto;
      return nuevasTareas;
    default:
      return state;
  }
};

function TareasComponenteComplejo() {
  const [tareas, dispatch] = useReducer(reducer, []);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [textoEditado, setTextoEditado] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") {
      setMensajeError("La tarea no puede estar vacía.");
      return;
    }
    dispatch({ type: "AGREGAR_TAREA", payload: nuevaTarea });
    setNuevaTarea("");
    setMensajeError("");
  };

  const eliminarTarea = (index) => {
    dispatch({ type: "ELIMINAR_TAREA", payload: index });
  };

  const editarTarea = (index) => {
    setEditandoIndex(index);
    setTextoEditado(tareas[index]);
  };

  const guardarEdicion = (index) => {
    if (textoEditado.trim() === "") {
      setMensajeError("La tarea no puede estar vacía.");
      return;
    }
  
    dispatch({ type: "EDITAR_TAREA", payload: { index, texto: textoEditado } });
    setEditandoIndex(null);
    setMensajeError("");
    setTextoEditado("");
  };
  
  return (
    <div>
      <h2>Componente Complejo con useState y useReducer</h2>
      {mensajeError && <p style={{ color: "red" }}>{mensajeError}</p>}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {editandoIndex === index ? (
              <>
                <input
                  type="text"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />
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

export default TareasComponenteComplejo;
