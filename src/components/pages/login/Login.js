import React from "react";
import { withRouter } from "react-router-dom";
import "./login.scss";

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
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          onChange={handleUserChange}
          value={userValue}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={passwordValue}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
