"use client";
import LoginForm from '@/components/LoginForm'
import MyNavbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoutes'
import React from 'react'

export default function page() {
  const isUserAuthenticated = ProtectedRoute();
  console.log(isUserAuthenticated)
  return (
    <div>
    {!isUserAuthenticated ? (
      // If the user is authenticated, display this content
        <div className='grid h-screen place-items-center px-5'>
            <LoginForm/>
        </div>
    ) : (
      <>
        <MyNavbar/>
      </>
    )}
    </div>
  );
};
