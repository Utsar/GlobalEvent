import React, { useRef } from "react";
import "./Register.css";
import "./Login.css";
import { backend } from "../../BackendConnection";
import { useHistory } from "react-router";
import LandingBackgroundVideo from "../LandingPage/LandingBackgroundVideo";
import LandingNavBar from "../LandingPage/LandingNavBar";
import LandingFooter from "../LandingPage/LandingFooter";

const Register = () => {
  const firstName = useRef();
  const surname = useRef();
  const email = useRef();
  const confirmEmail = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(
      firstName.current.value,
      surname.current.value,
      email.current.value,
      confirmEmail.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match");
    } else {
      const client = {
        firstName: firstName.current.value,
        surname: surname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await backend.post("clients/register", client);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <LandingBackgroundVideo />
      <LandingNavBar />
      <div className="registerform"></div>
      <form className="loginForm">
        <input
          type="text"
          ref={firstName}
          required
          className="loginInput"
          placeholder="first name"
        />
        <input
          type="text"
          ref={surname}
          required
          className="loginInput"
          placeholder="surname"
        />
        <div className="registerInput">
          <input
            type="email"
            ref={email}
            required
            className="loginInput"
            placeholder="email"
          />
          <input
            type="email"
            ref={confirmEmail}
            required
            className="loginInput"
            placeholder="confirm email"
          />
          <div className="registerInput">
            <input
              type="password"
              ref={password}
              required
              className="loginPassword"
              placeholder="password"
            />
          </div>
          <input
            type="password"
            ref={confirmPassword}
            required
            className="loginPassword"
            placeholder="confirm password"
          />
        </div>
        <input
          type="button"
          className="loginButton"
          value="Register"
          onClick={handleClick}
        />
      </form>
      <LandingFooter />
    </>
  );
};

export default Register;