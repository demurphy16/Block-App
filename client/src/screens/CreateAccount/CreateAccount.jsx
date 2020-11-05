import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import "../CreateAccount/CreateAccount.css";

function CreateAccount(props) {
  return (
    <Layout>
      <div className="create-account-container">
        {/* <img
          className="create-account-image"
          src="https://images.unsplash.com/photo-1507234916944-5221978fdf65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="image of people in newyork"
        /> */}
        <div className="create-account-image"></div>
        <div className="create-account-content">
          <h1>Create an Account</h1>
          <p>Here is a cute little sentence about our application</p>
          <form className="create-account-form">
            <div className="create-account-name">
              <label>First Name*</label>
              <input placeholder="First Name" />
              <label>Last Name*</label>
              <input placeholder="Last Name" />
            </div>
            <label>Email Address*</label>
            <input placeholder="Email Address" />
            <div className="create-account-address">
              <label>City/Town*</label>
              <input placeholder="Enter City/Town" />
              <label>State*</label>
              <input placeholder="" />
            </div>
            <label>Password*</label>
            <input placeholder="Enter Password" />
            <label>Confirm Password*</label>
            <input placeholder="Re-Enter Password" />
            <button>Create Account</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CreateAccount;
