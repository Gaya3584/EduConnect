import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <div className="password-field">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              required 
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="form-links">
          <p>Forgot your password? <a href="#reset">Reset</a></p>
          <p>Don't have an account? <a href="#signup" onClick={(e) => {
            e.preventDefault();
            navigate('/signup');
          }}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;