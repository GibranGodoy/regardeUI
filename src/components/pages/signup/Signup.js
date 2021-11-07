import React from "react";
import { withRouter } from "react-router-dom";
import "./signup.scss";

const Signup = (props) => {
  const [usernameValue, setUsernameValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const [lastnameValue, setLastnameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [typeUserValue] = React.useState("user");

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastnameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  async function signup(username, name, lastname, email, password, typeUser) {
    const response = await fetch(`https://regardapi.herokuapp.com/v1/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        type: typeUser,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      window.localStorage.setItem("loggedUser", JSON.stringify(data));
      props.setUser(data);
      props.history.push("/");
    } else {
      alert("Invalid email or password");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(
      usernameValue,
      nameValue,
      lastnameValue,
      emailValue,
      passwordValue,
      typeUserValue
    );
    setUsernameValue("");
    setNameValue("");
    setLastnameValue("");
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <div className="signupPage">
      <div className="signupCard">
        <h3>Registro</h3>
        <p className="body-1 signupSubtitle">
          Registrate para comenzar a escribir reseñas de las películas que has
          visto
        </p>
        <form onSubmit={handleSubmit} className="signupForm">
          <div className="nameSection">
            <div>
            <p className="body-1 text">Nombre</p>
            <input
              type="text"
              placeholder="Nombre"
              onChange={handleNameChange}
              value={nameValue}
              className="body-1"
            />
            </div>
            <div>
            <p className="body-1 text">Apellido</p>
            <input
              type="text"
              placeholder="Apellido"
              onChange={handleLastnameChange}
              value={lastnameValue}
              className="body-1"
            />
            </div>
          </div>
          <p className="body-1 text">Usuario</p>
          <input
            type="text"
            placeholder="Usuario"
            onChange={handleUsernameChange}
            value={usernameValue}
            className="body-1"
          />

          <p className="body-1 text">Correo</p>
          <input
            type="email"
            placeholder="Correo"
            onChange={handleEmailChange}
            value={emailValue}
            className="body-1"
          />
          <p className="body-1 text">Contraseña</p>
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            value={passwordValue}
            className="body-1"
          />
          <button type="submit" className="signupButton">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Signup);
