import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { signIn } from "../../services/users";
import "../Login/Login.css";

function Login(props) {
  const { user, setUser } = props;
  const [userInfo, setUserInfo] = useState({
    emailAddress: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await signIn(userInfo);
    setUser({ user });
    console.log(userInfo);
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

  function redirect() {
    if (user !== null) {
      return <Redirect to={`/home`} />;
    }
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
            <input
              placeholder="Password"
              type="text"
              value={userInfo.password}
              name="password"
              onChange={handleChange}
            />
            <div className="login-button-container">
              <button type="submit" onClick={() => redirect()}>
                Login
              </button>
            </div>
          </form>
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
