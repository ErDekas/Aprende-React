import React, { useState, useEffect } from "react";

// Componente optimizado con React.memo
const TablaUsuarios = React.memo(({ usuarios, onEditar, onEliminar }) => {
  console.log("Renderizando TablaUsuarios...");

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user) => (
          <tr key={user.id}>
            <td>{user.nombre}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onEditar(user)}>Editar</button>
              <button onClick={() => onEliminar(user.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

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

  const manejarEliminar = (id) => {
    setUsuarios((prev) => prev.filter((user) => user.id !== id));
  };

  const editarUsuario = (usuario) => {
    setModoEditar(true);
    setFormData(usuario);
  };

  const resetFormulario = () => {
    setFormData({ id: null, nombre: "", email: "" });
    setModoEditar(false);
  };

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

      {/* Tabla separada en un componente optimizado */}
      <TablaUsuarios
        usuarios={usuarios}
        onEditar={editarUsuario}
        onEliminar={manejarEliminar}
      />
    </div>
  );
};

export default App;
