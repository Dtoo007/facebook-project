import React from 'react'
import './PageContent.css';
import logo from "/src/assets/logo.svg";
import LoginForm from '../LoginForm/LoginForm';

const PageContent = () => {
  return (
    <div className="page-content">
      <div className="heading">
        <div className="image">
          <img src={logo} alt="blue color facebook logo"></img>
        </div>
        <div>
          <h3>
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default PageContent