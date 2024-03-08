import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import './Login.css'; // Importa el archivo CSS

const Login = () => {
  // Definir estados para los campos del formulario y mensajes de error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Obtener la función de navegación

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el campo de correo electrónico
    if (!email) {
      setEmailError('Por favor, introduce tu correo electrónico');
      return;
    }

    // Validar el campo de contraseña
    if (!password) {
      setPasswordError('Por favor, introduce tu contraseña');
      return;
    }

    // Si los campos son válidos, redirigir al usuario a la página de inicio
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

