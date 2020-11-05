import React from "react";
import { Link } from "react-router-dom";
import "./LandingScreen.css";

function LandingScreen(props) {
  return (
    <div className="landing-screen-container">
      <h1 className="landing-screen-logo">block</h1>
      <div className="landing-screen-portal">
        <Link to="/login">
          <button className="landing-screen-sign-in">Sign In</button>
        </Link>
        <Link to="/create-account">
          <button className="landing-screen-account">Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
