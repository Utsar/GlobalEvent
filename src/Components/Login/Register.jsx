import React from "react";
import "./Register.css";
import "./Login.css";

const Register = () => {
  return (
    <>
      <div className="registerform"></div>
      <div className="loginForm">
        <input type="text" className="loginInput" placeholder="first name" />
        <input type="text" className="loginInput" placeholder="surname" />
        <div className="registerInput">
          <input type="text" className="loginInput" placeholder="email" />
          <input
            type="text"
            className="loginInput"
            placeholder="confirm email"
          />
          <div className="registerInput">
            <input
              type="password"
              className="loginPassword"
              placeholder="password"
            />
          </div>
          <input
            type="password"
            className="loginPassword"
            placeholder="confirm password"
          />
        </div>
        <input type="button" className="loginButton" value="Register" />
      </div>
    </>
  );
};

export default Register;
