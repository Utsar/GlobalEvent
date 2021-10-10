import React, { useRef, useContext } from "react";
import "./Login.css";
import { useHistory, withRouter } from "react-router";

import { AuthContext } from "../../Context/AuthContext";
import LandingBackgroundVideo from "../LandingPage/LandingBackgroundVideo";
import LandingNavBar from "../LandingPage/LandingNavBar";
import LandingFooter from "../LandingPage/LandingFooter";
import { backend } from "../../BackendConnection";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const { client, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await backend.post("/clients/login", {
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("token", response.data.accessToken);
      await backend.post(
        "/events",
        JSON.parse(localStorage.getItem("newEvent"))
      );
      history.push("/client");
    } catch (error) {}
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
