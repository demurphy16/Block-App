import React from "react";
import { Link } from "react-router-dom";
import "../CreateAccount/CreateAccount.css";

function CreateAccount(props) {
  const { signIn, setSignIn } = props;
  return (
    <div className="create-account-container">
      <div className="create-account-image"></div>
      <div className="create-account-content">
        <h1>Create an Account</h1>
        <p>Here is a cute little sentence about our application</p>
        <form className="create-account-form">
          <div className="create-account-name">
            <div className="create-account-alignment">
              <label>First Name*</label>
              <input placeholder="First Name" />
            </div>
            <div className="create-account-firstname">
              <label>Last Name*</label>
              <input placeholder="Last Name" />
            </div>
          </div>
          <label>Email Address*</label>
          <input placeholder="Email Address" />
          <div className="create-account-address">
            <div className="create-account-alignment">
              <label>City/Town*</label>
              <input placeholder="Enter City/Town" />
            </div>
            <div className="create-account-alignment">
              <label>State*</label>
              <select id="states" name="states">
                <option value="">{"  "}</option>
                <option value="ny">NY</option>
              </select>
            </div>
          </div>
          <label>Password*</label>
          <input placeholder="Enter Password" />
          <label>Confirm Password*</label>
          <input placeholder="Re-Enter Password" />

          <label htmlFor="terms-conditions" className="terms-conditions">
            <input type="checkbox" name="terms-conditions" />
            I've read and accept the <span> Terms of Service </span> and
            <span> Private Policy </span>
          </label>
          <Link to="/home">
            <button
              className="create-account-submit"
              onClick={() => setSignIn(!signIn)}
            >
              Create Account
            </button>
          </Link>
        </form>
        <p className="create-account-login">
          Already registered?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
