import React, { Component, useState } from "react";
import "./login.css";
import AuthenticationService from "../Services/AuthenticationService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const history = useHistory();

  const checkLogin = (p) => {
    p.preventDefault();
    let employee = { email: email, password: password };
    console.log(JSON.stringify(employee));

    AuthenticationService.loginEmployee(employee)
      .then((response) => {
        console.log(response);
        if (response.data) {
          setShowSuccessMessage(true);
          setHasLoginFailed(false);

          AuthenticationService.registerSuccessfulLogin(response.data);
          history.push("/dashboard");
        } else {
          setShowSuccessMessage(false);
          setHasLoginFailed(true);
        }
      })
      .catch(() => {
        setShowSuccessMessage(false);
        setHasLoginFailed(true);
      });
  };

  return (
    <div>
      <div className="container">
        <form className="form-signin">
          <h1 className="form-signin-heading">Employee Login</h1>
          {hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {showSuccessMessage && <div>Login Sucessful</div>}
          <div className="form-register-main">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                validations={[required]}
              />
            </div>
            <button className="btn btn-lg btn-success" onClick={checkLogin}>
              Login
            </button>
            <div className="form-group">
              Cannot log-in? <a href="/register">Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
