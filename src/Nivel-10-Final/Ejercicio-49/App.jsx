import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";

// Lazy loading para TablaUsuarios
const TablaUsuarios = lazy(() =>
  import("./TablaUsuarios") // Asegúrate de que este archivo existe
);

const App = () => {
  const [usuarios, setUsuarios] = useState(() => {
    const datosGuardados = localStorage.getItem("usuarios");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [formData, setFormData] = useState({ id: null, nombre: "", email: "" });
  const [modoEditar, setModoEditar] = useState(false);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const manejarEliminar = useCallback(
    (id) => {
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
    },
    [setUsuarios]
  );

  const editarUsuario = useCallback(
    (usuario) => {
      setModoEditar(true);
      setFormData(usuario);
    },
    []
  );

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (modoEditar) {
      setUsuarios((prev) =>
        prev.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      setUsuarios((prev) => [
        ...prev,
        { id: Date.now(), nombre: formData.nombre, email: formData.email },
      ]);
    }
    resetFormulario();
  };

  const resetFormulario = () => {
    setFormData({ id: null, nombre: "", email: "" });
    setModoEditar(false);
  };

  const totalUsuarios = useMemo(() => {
    console.log("Calculando total de usuarios...");
    return usuarios.length;
  }, [usuarios]);

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={manejarCambio}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={manejarCambio}
          placeholder="Email"
          required
        />
        <button type="submit">{modoEditar ? "Actualizar" : "Añadir"}</button>
        {modoEditar && <button onClick={resetFormulario}>Cancelar</button>}
      </form>

      <p>Total de usuarios: {totalUsuarios}</p>

      {/* Suspense envuelve el componente cargado con lazy */}
      <Suspense fallback={<div>Cargando tabla de usuarios...</div>}>
        <TablaUsuarios
          usuarios={usuarios}
          onEditar={editarUsuario}
          onEliminar={manejarEliminar}
        />
      </Suspense>
    </div>
  );
};

export default App;
