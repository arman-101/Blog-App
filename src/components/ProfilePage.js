import React from 'react';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

function ProfilePage() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Swal.fire('Logout Failed!', error.message, 'error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Profile Page</h2>
      <p>Welcome, {auth.currentUser?.email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
