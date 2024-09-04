import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Profile Page</h2>
      <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
