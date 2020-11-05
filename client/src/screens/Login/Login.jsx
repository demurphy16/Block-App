import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

function Login(props) {
  const { signIn, setSignIn } = props;

  return (
    <div className="login-screen-container">
      <div className="login-portal-container">
        <h1 className="login-screen-logo">block</h1>
        <div className="login-forms">
          <form>
            <label>Sign In</label>
            <br />
            <input placeholder="Email" />
          </form>
          <form>
            <input placeholder="Password" />
          </form>
          <p>Forgot Password?</p>
        </div>
        <div className="login-button-container">
          <Link to="/home">
            <button onClick={() => setSignIn(!signIn)}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
