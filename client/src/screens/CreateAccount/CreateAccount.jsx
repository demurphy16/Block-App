import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createUser } from "../../services/users";
import "../CreateAccount/CreateAccount.css";

function CreateAccount(props) {
  // const { signIn, setSignIn,} = props;
  const [created, setCreated] = useState(false);
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    cityTown: "",
    state: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value, // [] not always an array, inside object allows you to declare variable as a key
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createUser(account);
    setCreated({ created });
  };

  if (created) {
    return <Redirect to={`/login`} />;
  }

  return (
    <div className="create-account-container">
      <div className="create-account-image"></div>
      <div className="create-account-content">
        <h1>Create an Account</h1>
        <p>Here is a cute little sentence about our application</p>
        <form className="create-account-form" onSubmit={handleSubmit}>
          <div className="create-account-name">
            <div className="create-account-alignment">
              <label>First Name*</label>
              <input
                placeholder="First Name"
                type="text"
                value={account.firstName}
                name="firstName"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="create-account-firstname">
              <label>Last Name*</label>
              <input
                placeholder="Last Name"
                type="text"
                value={account.lastName}
                name="lastName"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Email Address*</label>
          <input
            placeholder="Email Address"
            type="text"
            value={account.emailAddress}
            name="emailAddress"
            required
            autoFocus
            onChange={handleChange}
          />
          <div className="create-account-address">
            <div className="create-account-alignment">
              <label>City/Town*</label>
              <input
                placeholder="Enter City/Town"
                type="text"
                value={account.cityTown}
                name="cityTown"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="create-account-alignment">
              <label>State*</label>
              <select id="states" name="states">
                <option
                  value={account.state}
                  name="state"
                  required
                  autoFocus
                  onChange={handleChange}
                >
                  {"  "}
                </option>
                <option value="ny">NY</option>
              </select>
            </div>
          </div>
          <label>Password*</label>
          <input
            placeholder="Enter Password"
            type="text"
            value={account.password}
            name="password"
            required
            autoFocus
            onChange={handleChange}
          />
          <label>Confirm Password*</label>
          <input placeholder="Re-Enter Password" type="text" />

          <label htmlFor="terms-conditions" className="terms-conditions">
            <input type="checkbox" name="terms-conditions" />
            I've read and accept the <span> Terms of Service </span> and
            <span> Private Policy </span>
          </label>
          <button
            type="submit"
            className="create-account-submit"
            // onClick={() => setSignIn(!signIn)}
          >
            Create Account
          </button>
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
