import React from 'react';
import './LoginForm.css';
const LoginForm = () => {
  return (
    <div className="form-body">
      <form>
        <div className="form">
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Email address or phone number"
          ></input>
          <input
            className="form-input"
            type="text"
            name="password"
            placeholder="Password"
          ></input>
          <button className="login-button" type="submit">
            Log in
          </button>
        </div>
        <a href="forgotten-passowrd.com">Forgotten password</a>
        <h className="h-line"></h>
        <div>
          <button className="new-account-button" type="submit">
            Create new account
          </button>
        </div>
      </form>
      <p className="page-link">
        <b>Create a page</b> for celebrity, brand or business.
      </p>
    </div>
  );
}

export default LoginForm