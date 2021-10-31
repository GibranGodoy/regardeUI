import React from "react";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  let history = useHistory();
  const handleLogout = () => {
    // event.preventDefault();
    // props.logout();
    window.localStorage.removeItem("loggedUser");
    history.replace("/");
  };
  handleLogout();
  return <></>;
};

export default Logout;
