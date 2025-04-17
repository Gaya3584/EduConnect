import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Land from './land';
import Login from './login';
import Sign from './sign';
import Dashboard from './dash';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
