import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import './sign.css';

const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }

    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log('User created:', userCredential.user);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error.message);
      alert(error.message);
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In successful:', result.user);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className='signup-pagez'>
      <div className="signup-containerz">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-formz">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {passwordError && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '-10px' }}>{passwordError}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <div className="dividerz">
          <span>OR</span>
        </div>

        <div className="google-signupz">
          <button 
            className="google-btnz" 
            onClick={handleGoogleSignUp}
            disabled={isLoading}
          >
            Sign Up with Google
          </button>
        </div>

        <div className="signin-linkz">
          <p>Already have an account? <a href="#login" onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}>Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Sign;
