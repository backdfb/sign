import React from 'react'
import './component/signform.css'

const SignUpPage = () => {
    return (
      <div className="signup-container">
        <h1 className="heading">Welcome to SignUp Form</h1>
        <div className="input-container">
          <input
            type="email"
            placeholder="name@yourcompany.com"
            className="email-input"
          />
          <button className="email-button">Continue with Email</button>
        </div>
        <div className="auth-options">
          <button className="google-button">Continue with Google</button>
          <button className="apple-button">Continue with Apple</button>
        </div>
        <div className="sign-in-link">
          <a href="#">Already have an account? Sign In</a>
        </div>
      </div>
    );
  };

export default SignUpPage