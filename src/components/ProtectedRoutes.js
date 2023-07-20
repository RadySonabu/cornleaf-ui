// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProtectedRoute = ( children ) => {
  const router = useRouter();

  // Your authentication logic to check if the user has a valid token
  const isUserAuthenticated = () => {
    // Replace this with your actual authentication check, e.g., check for a valid token in local storage
        const token = localStorage.getItem('authToken');
        return !!token; // Return true if the token is present, false otherwise
  };

  useEffect(() => {
    if (!isUserAuthenticated()) {
      router.push('/login'); // Redirect to the login page if the user is not authenticated
    }
  }, []);

  return isUserAuthenticated(); // Return the authentication status
};

export default ProtectedRoute;
