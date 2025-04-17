import React, { useState } from 'react';


import './sign.css';



const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    topic: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const topics = [
    'Computer Science',
    'Electronics',
    'Mechanical Engineering',
    'Civil Engineering',
    'Mathematics',
    'Physics',
    'Biology',
    'Economics',
    'Psychology',
    'Literature'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', formData);
    // Further actions (API, DB, etc.)
  };
  

  return (
    <div className='signup-page'>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
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

        <button type="submit">Register</button>
       

      </form>
    </div>
    </div>
  );
};

export default Sign;
