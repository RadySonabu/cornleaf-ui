import router from 'next/navigation';
import React from 'react';
import { Button } from "@material-tailwind/react";

const Logout = () => {
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');
    // Redirect the user to the login page or any other page after logout
    // For example, you can redirect to the login page:
    window.location.href = '/login';
  };

  return (
    <Button color="red" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
