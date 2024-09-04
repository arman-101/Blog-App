import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Blog for Free</h1>
      <div className="text-center">
        <Link to="/login" className="btn btn-primary me-2">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </div>
    </div>
  );
}

export default WelcomePage;
