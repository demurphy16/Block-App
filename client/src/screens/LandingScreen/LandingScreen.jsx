import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { Link } from "react-router-dom"
import "./LandingScreen.css";

function LandingScreen(props) {
  return (
    <Layout>
      <div className="landing-screen-container">
        <h1 className="landing-screen-logo">block</h1>
        <div className="landing-screen-portal">
          <Link to="/sign-in">
            <button className="landing-screen-sign-in">Sign In</button>
          </Link>
          <button className="landing-screen-account">Create an Account</button>
        </div>
      </div>
    </Layout>
  );
}

export default LandingScreen;
