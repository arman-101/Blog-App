import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import Swal from 'sweetalert2';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire('Logged out successfully!', '', 'success');
    } catch (error) {
      Swal.fire('Logout Failed!', error.message, 'error');
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
