import React from "react";
import "./Login.css";
import { withRouter } from "react-router";

export const Login = () => {
  return (
    <>
      <div className="form"></div>
      <div className="loginForm">
        <input type="text" className="loginInput" placeholder="email" />
        <input
          type="password"
          className="loginPassword"
          placeholder="password"
        />
        <input type="button" className="loginButton" value="Login" />
      </div>
    </>
  );
};

export default withRouter(Login);
