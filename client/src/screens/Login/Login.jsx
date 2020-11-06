import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../Login/Login.css";

function Login(props) {
  const { user, setUser } = props;
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (login) {
    return <Redirect to={`/home`} />;
  }

  return (
    <div className="login-screen-container">
      <div className="login-portal-container">
        <h1 className="login-screen-logo">block</h1>
        <div className="login-forms">
          <form>
            <label>Sign In</label>
            <br />
            <input
              placeholder="Email"
              type="text"
              value={email}
              name="email"
              onChange={() => setEmail(email)}
            />
          </form>
          <form>
            <input
              placeholder="Password"
              type="text"
              value={password}
              name="password"
              onChange={() => setPassword(password)}
            />
          </form>
          <p>Forgot Password?</p>
        </div>
        <div className="login-button-container">
          {/* <Link to="/home"> */}
          <button type="submit">Login</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
