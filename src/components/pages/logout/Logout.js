import React from "react";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  let history = useHistory();
  
  const handleLogout = (event) => {
    window.localStorage.removeItem("loggedUser");
    history.replace("/");
  };
  handleLogout();
  return <></>;
};

export default Logout;
