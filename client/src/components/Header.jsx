import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-red-500">
          <span className="text-black">BOOK</span>
          <span className="text-red-500">W</span>
          <span className="text-black">ORM</span>
        </div>

        {/* Login and Signup */}
        <div className="flex space-x-6">
          <a href="/login" className="flex items-center text-gray-700 hover:text-black">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
          </a>
          <a href="/signup" className="flex items-center text-gray-700 hover:text-black">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Signup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
