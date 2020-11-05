import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";
import "./LandingScreen.css";

function LandingScreen(props) {
  const [signIn, setSignIn] = useState(false);

  return (
    <Layout signIn={signIn} setSignIn={setSignIn}>
      <div className="landing-screen-container">
        <h1 className="landing-screen-logo">block</h1>
        <div className="landing-screen-portal">
          <Link to="/login">
            <button className="landing-screen-sign-in">Sign In</button>
          </Link>
          <Link to="/create-account">
            <button className="landing-screen-account">
              Create an Account
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LandingScreen;
