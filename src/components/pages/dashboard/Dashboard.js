import React from "react";
import { withRouter } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = (props) => {
  return <h1>Hello {props.user.username}</h1>;
};

export default withRouter(Dashboard);
