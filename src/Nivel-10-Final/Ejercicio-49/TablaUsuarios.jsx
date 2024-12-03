import React from "react";

const TablaUsuarios = ({ usuarios, onEditar, onEliminar }) => {
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
};

export default React.memo(TablaUsuarios);
