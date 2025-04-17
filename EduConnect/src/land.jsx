import React from 'react';
import { useNavigate } from 'react-router-dom';
import './land.css';
import clip from './assets/clip.jpg'; // Import the image

const Land = () => {
  const navigate = useNavigate();
  
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="content">
          <h1>Hey Everyone!</h1>
          <p>"Share your doubts, for in seeking answers, we all grow wiser together."</p>
          <div className="buttons">
            <button className="btn login" onClick={() => navigate('/login')}>Login</button>
            <button className="btn signup" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
        <div className="image-section">
          <img src={clip} alt="Community illustration" className="landing-image" />
          <div className="welcome-text">
            <h2>Join Our Community</h2>
            <p>Welcome to a community where curiosity is celebrated and learning never stops. This platform is built on a simple yet powerful idea: <strong>share your doubts, and help others by answering theirs.</strong> Whether you're a student, a professional, or simply someone eager to learn, this space is for open conversations, thoughtful questions, and collaborative growth. No doubt is too small, and every answer adds value. Together, let's build a supportive circle of knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;