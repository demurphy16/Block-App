import React from "react"
import Layout from "../../components/Shared/Layout/Layout";
import "./SignIn.css"

function SignIn(props) {
  return (
    <Layout>
      <div className="sign-in-screen-container">
        <div>block</div>
        <div>Sign In</div>
        <form>
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
        </form>
        <div>Forgot Password?</div>
        <button>Login</button>
      </div>
    </Layout>
  )
}

export default SignIn