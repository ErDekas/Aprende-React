import React, { useState } from "react";

function FormularioValidado() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Función para validar el formato del email
  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Manejar cambios de los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    if (name === "nombre") { setNombre(value); }
    if (name === "email") { setEmail(value); }
  };

  // Validar el email cuando pierde el foco (onBlur)
  const manejarBlurEmail = () => {
    if (!validarEmail(email)) {
      setError("Email no válido");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h2>Formulario Validado</h2>
      <form>
        <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={manejarCambio} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={manejarCambio} onBlur={manejarBlurEmail} />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FormularioValidado;