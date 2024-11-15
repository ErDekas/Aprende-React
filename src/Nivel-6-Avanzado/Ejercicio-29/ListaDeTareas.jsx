import React, { useReducer } from "react";

// Reducer para manejar el estado de las tareas
const reducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      if (action.payload.trim() === "") return state; // No agregar tareas vacías
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    case "ELIMINAR_TAREA":
      return {
        ...state,
        tareas: state.tareas.filter((_, index) => index !== action.payload),
      };
    case "EDITAR_TAREA":
      const nuevasTareas = [...state.tareas];
      nuevasTareas[action.payload.index] = action.payload.texto;
      return {
        ...state,
        tareas: nuevasTareas,
        editandoIndex: null,
        textoEditado: "",
      };
    case "SET_EDITANDO":
      return {
        ...state,
        editandoIndex: action.payload,
        textoEditado: state.tareas[action.payload],
      };
    case "SET_NUEVA_TAREA":
      return {
        ...state,
        nuevaTarea: action.payload,
      };
    case "SET_TEXTO_EDITADO":
      return {
        ...state,
        textoEditado: action.payload,
      };
    default:
      return state;
  }
};

// Estado inicial
const estadoInicial = {
  tareas: [],
  nuevaTarea: "",
  textoEditado: "",
  editandoIndex: null,
};

function ListaDeTareas() {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  // Función para agregar una tarea
  const agregarTarea = () => {
    dispatch({ type: "AGREGAR_TAREA", payload: state.nuevaTarea });
    dispatch({ type: "SET_NUEVA_TAREA", payload: "" });
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    dispatch({ type: "ELIMINAR_TAREA", payload: index });
  };

  // Función para iniciar la edición de una tarea
  const editarTarea = (index) => {
    dispatch({ type: "SET_EDITANDO", payload: index });
  };

  // Función para guardar la edición de una tarea
  const guardarEdicion = (index) => {
    if (state.textoEditado.trim() === "") return; // No permitir texto vacío
    dispatch({ type: "EDITAR_TAREA", payload: { index, texto: state.textoEditado } });
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={state.nuevaTarea}
        onChange={(e) => dispatch({ type: "SET_NUEVA_TAREA", payload: e.target.value })}
        placeholder="Agregar Tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {state.tareas.map((tarea, index) => (
          <li key={index}>
            {state.editandoIndex === index ? (
              <>
                <input
                  type="text"
                  value={state.textoEditado}
                  onChange={(e) => dispatch({ type: "SET_TEXTO_EDITADO", payload: e.target.value })}
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

export default ListaDeTareas;
