import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ isLoggedIn, children }) => {
  // If the user is logged in, redirect to the home page
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
