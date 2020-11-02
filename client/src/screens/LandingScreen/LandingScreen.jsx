import React from "react";
import Layout from "../../components/Shared/Layout/Layout";

function LandingScreen(props) {
  return (
    <Layout>
      <div>
        <h1>block</h1>
        <div>
          <button>Sign In</button>
          <button>Create an Account</button>
        </div>
      </div>
    </Layout>
  );
}

export default LandingScreen;
