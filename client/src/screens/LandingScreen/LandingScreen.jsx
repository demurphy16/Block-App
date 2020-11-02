import React from 'react';
import Layout from "../../components/Shared/Layout.jsx"

function LandingScreen(props) {
  return (
    <div>
      <Layout />
      <div>
        <h1>block</h1>
        <div>
          <button>Sign In</button>
          <button>Create an Account</button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;