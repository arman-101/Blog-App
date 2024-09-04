import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import BlogFeed from './components/BlogFeed';
import BlogEditor from './components/BlogEditor';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feed" element={<BlogFeed />} />
        <Route path="/write" element={<BlogEditor />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
