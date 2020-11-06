import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { signIn } from "../../services/users";
import "../Login/Login.css";

function Login(props) {
  const { user, handleSetUser } = props;
  const [userInfo, setUserInfo] = useState({
    emailAddress: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(true);
    const user = await signIn(userInfo);
    handleSetUser(user);

    // console.log(userInfo);
    console.log(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value, // [] not always an array, inside object allows you to declare variable as a key
    });
  };

  // useEffect(() => {
  //   console.log(`use effect user ${user}`);
  //     return <Redirect to={`/home`} />
  // }, [user]);

  if (user !== null) {
    return <Redirect to={`/home`} />;
  }
  return (
    <div className="login-screen-container">
      <div className="login-portal-container">
        <h1 className="login-screen-logo">block</h1>
        <div className="login-forms">
          <form onSubmit={handleSubmit}>
            <label>Sign In</label>
            <br />
            <input
              placeholder="Email"
              type="text"
              value={userInfo.emailAddress}
              name="emailAddress"
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="Password"
              type="text"
              value={userInfo.password}
              name="password"
              onChange={handleChange}
            />
            <p>Forgot Password?</p>
            <div className="login-button-container">
              <button type="submit">Login</button>
            </div>
          </form>
          <div
            className={
              error === false ? "error-message hidden" : "error-message"
            }
          >
            <p>Email or Password were incorrect.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
