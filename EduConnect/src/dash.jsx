import React, { useState } from 'react';
import './dash.css';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Dash = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'How to implement authentication in React?',
      author: 'Alice',
      time: '2 hours ago',
      status: 'answered',
      votes: 12,
      tags: ['React', 'Auth']
    },
    {
      id: 2,
      text: 'What is the difference between let and var in JavaScript?',
      author: 'Bob',
      time: '1 day ago',
      status: 'unanswered',
      votes: 8,
      tags: ['JavaScript', 'Variables']
    }
  ]);

  return (
    <div className="dashboard">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="logo">Q&A Hub</div>
        <div className="search-bar">
          <FaSearch />
          <input type="text" placeholder="Search questions..." />
        </div>
        <div className="nav-icons">
          <div className="notif">
            <FaBell />
            <span className="badge">3</span>
          </div>
          <div
            className="profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle />
            {dropdownOpen && (
              <div className="dropdown">
                <div>View Profile</div>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Layout Wrapper */}
      <div className="content">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="menu">
            <div className="menu-item active">Dashboard</div>
            <div className="menu-item">My Questions</div>
            <div className="menu-item">Bookmarks</div>
            <div className="menu-item">Help Center</div>
          </div>
          <div className="tags">
            <h4>Popular Tags</h4>
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">CSS</span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="main">
          <button className="ask-btn">Ask a Question</button>

          <div className="sort-tabs">
            <button className="tab active">Recently Asked</button>
            <button className="tab">Unanswered</button>
            <button className="tab">Most Popular</button>
          </div>

          <div className="questions">
            {questions.map((q) => (
              <div className="question-card" key={q.id}>
                <div className="q-text">{q.text}</div>
                <div className="q-tags">
                  {q.tags.map((tag, idx) => (
                    <span key={idx} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="q-footer">
                  <span>{q.author} • {q.time}</span>
                  <span
                    className={`status ${q.status}`}
                  >
                    {q.status}
                  </span>
                  <span className="votes">{q.votes} votes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="rightbar">
          <div className="trending">
            <h4>Trending Topics</h4>
            <ol>
              <li>React Hooks</li>
              <li>Tailwind CSS</li>
              <li>Node.js Performance</li>
            </ol>
          </div>
          <div className="stats">
            <div className="stat-card">Total Questions: 102</div>
            <div className="stat-card">Total Answers: 89</div>
            <div className="stat-card">Users: 56</div>
            <div className="stat-card">Tags: 14</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
