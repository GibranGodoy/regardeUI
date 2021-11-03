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
    signup(usernameValue, nameValue, lastnameValue, emailValue, passwordValue, typeUserValue);
    setUsernameValue("");
    setNameValue("");
    setLastnameValue("");
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleUsernameChange}
          value={usernameValue}
        />
        <input
          type="text"
          placeholder="name"
          onChange={handleNameChange}
          value={nameValue}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={handleLastnameChange}
          value={lastnameValue}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={emailValue}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={passwordValue}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
