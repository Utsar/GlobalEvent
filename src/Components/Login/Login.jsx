import React, { useRef, useContext } from "react";
import "./Login.css";
import { withRouter } from "react-router";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../Context/AuthContext";
import LandingBackgroundVideo from "../LandingPage/LandingBackgroundVideo";
import LandingNavBar from "../LandingPage/LandingNavBar";
import LandingFooter from "../LandingPage/LandingFooter";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { client, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(client);
  return (
    <>
      <LandingBackgroundVideo />
      <LandingNavBar />
      <div className="form"></div>
      <div className="loginForm">
        <input
          type="email"
          required
          className="loginInput"
          placeholder="email"
          ref={email}
        />
        <input
          type="password"
          required
          className="loginPassword"
          placeholder="password"
          ref={password}
        />
        <input
          type="button"
          className="loginButton"
          value="Login"
          onClick={handleClick}
        />
        <input
          type="button"
          className="loginButton"
          href="/register"
          value="Register"
        />
      </div>
      <LandingFooter />
    </>
  );
};

export default withRouter(Login);
