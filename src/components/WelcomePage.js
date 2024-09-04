import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function WelcomePage() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Welcome to Blog for Free</h1>
      <p className="lead">Your go-to platform for sharing your thoughts and stories.</p>
      <div className="mt-4">
        <Link to="/register" className="btn btn-primary me-2">Register</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
