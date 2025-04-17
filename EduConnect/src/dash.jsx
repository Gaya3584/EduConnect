import React, { useState } from 'react';
import './dash.css';

const topics = [
  'Computer Science', 'Mechanical Engineering', 'Electrical Engineering',
  'Civil Engineering', 'Electronics', 'Mathematics', 'Physics', 'Biology'
];

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [answers, setAnswers] = useState({});
  const [filterTopic, setFilterTopic] = useState('');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '' && selectedTopic !== '') {
      setQuestions([
        ...questions,
        { text: newQuestion, id: Date.now(), topic: selectedTopic, answers: [] }
      ]);
      setNewQuestion('');
      setSelectedTopic('');
    }
  };

  const handleAnswerChange = (e, qid) => {
    setAnswers({ ...answers, [qid]: e.target.value });
  };

  const handleAnswerSubmit = (qid) => {
    if (answers[qid]?.trim()) {
      const updated = questions.map(q =>
        q.id === qid ? { ...q, answers: [...q.answers, answers[qid]] } : q
      );
      setQuestions(updated);
      setAnswers({ ...answers, [qid]: '' });
    }
  };

  const filteredQuestions = filterTopic
    ? questions.filter((q) => q.topic === filterTopic)
    : questions;

  return (
    <div className="dashboard">
      <h2>Ask or Answer Questions</h2>

      <form onSubmit={handleQuestionSubmit} className="ask-form">
        <textarea
          placeholder="Ask your question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
        />
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          required
        >
          <option value="">Select Topic</option>
          {topics.map((topic, idx) => (
            <option key={idx} value={topic}>{topic}</option>
          ))}
        </select>
        <button type="submit">Post Question</button>
      </form>

      <div className="filter-section">
        <label>View Questions by Topic: </label>
        <select value={filterTopic} onChange={(e) => setFilterTopic(e.target.value)}>
          <option value="">All Topics</option>
          {topics.map((topic, idx) => (
            <option key={idx} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className="question-list">
        {filteredQuestions.length === 0 ? (
          <p>No questions posted yet.</p>
        ) : (
          filteredQuestions.map((q) => (
            <div key={q.id} className="question-card">
              <p className="question-text"><strong>Q:</strong> {q.text}</p>
              <p className="question-topic"><em>Topic: {q.topic}</em></p>

              <div className="answers">
                {q.answers.map((ans, idx) => (
                  <p key={idx} className="answer"><strong>A:</strong> {ans}</p>
                ))}
              </div>

              <div className="answer-form">
                <input
                  type="text"
                  placeholder="Write your answer..."
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(e, q.id)}
                />
                <button onClick={() => handleAnswerSubmit(q.id)}>Submit</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
