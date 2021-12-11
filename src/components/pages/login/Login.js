import React from "react";
import { withRouter } from "react-router-dom";
import "./login.scss";
import PropTypes from "prop-types";

const Login = (props) => {
  const [userValue, setUserValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleUserChange = (event) => {
    setUserValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  async function login(email, password) {
    const response = await fetch(
      `https://regardapi.herokuapp.com/v1/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      window.localStorage.setItem("loggedUser", JSON.stringify(data.user));
      props.setUser(data.user);
      props.history.push("/");
    } else {
      alert("Invalid email or password");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userValue, passwordValue);
    setUserValue("");
    setPasswordValue("");
  };

  return (
    <div className="loginPage">
      <div className="loginCard">
        <h3>Iniciar sesión</h3>
        <p className="body-1 loginSubtitle">
          Inicia sesión en tu cuenta para continuar
        </p>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="body-1 text">Correo</p>
          <input
            type="email"
            placeholder="correo"
            onChange={handleUserChange}
            value={userValue}
            className="body-1"
          />
          <p className="body-1 text">Contraseña</p>
          <input
            type="password"
            placeholder="contraseña"
            onChange={handlePasswordChange}
            value={passwordValue}
            className="body-1"
          />
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
