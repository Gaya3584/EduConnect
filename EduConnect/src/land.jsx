import React from 'react';
import { useNavigate } from 'react-router-dom';
import './land.css';
import clip from './assets/clip.jpg';

const Land = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');
  
  return (
    <div className="landing-pagey">
      <div className="landing-containery">
        <div className="contenty">
          <h1>Hey Everyone!</h1>
          <p>"Share your doubts, for in seeking answers, we all grow wiser together."</p>
          <div className="buttonsy">
            <button className="btny loginy" onClick={handleLogin}>Login</button>
            <button className="btny signupy" onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
        <div className="image-sectiony">
          <img src={clip} alt="Community illustration" className="landing-imagey" />
          <div className="welcome-texty">
            <h2>Join Our Community</h2>
            <p>Welcome to a community where curiosity is celebrated and learning never stops. This platform is built on a simple yet powerful idea: <strong>share your doubts, and help others by answering theirs.</strong> Whether you're a student, a professional, or simply someone eager to learn, this space is for open conversations, thoughtful questions, and collaborative growth. No doubt is too small, and every answer adds value. Together, let's build a supportive circle of knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
