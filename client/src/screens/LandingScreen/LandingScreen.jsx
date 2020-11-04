import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import "./LandingScreen.css";

function LandingScreen(props) {
  return (
    <Layout>
      <div className="landing-screen-container">
        <h1 className="landing-screen-logo">block</h1>
        <div>
          <button>Sign In</button>
          <button>Create an Account</button>
        </div>
      </div>
    </Layout>
  );
}

export default LandingScreen;
