import React, { useState } from 'react';
React
function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [tipo_usuario, setTipoUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form...', { username, tipo_usuario, password });
    // Aquí iría el código para enviar los datos a un servidor o para realizar cualquier otra acción necesaria
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Tipo de usuario:
        <select value={tipo_usuario} onChange={(e) => setTipoUsuario(e.target.value)}>
          <option value="">Seleccione una opción</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Profesor">Profesor</option>
          <option value="Administracion">Administracion</option>
        </select>
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegistrationForm;
