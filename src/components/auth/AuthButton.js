import React from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "./AuthContext";
import './authButton.scss'

function useAuth() {
  return React.useContext(authContext);
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p className="signout">
      Welcome{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
