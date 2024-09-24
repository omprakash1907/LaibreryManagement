import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faSignOutAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, userEmail, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-red-500">
          <span className="text-black">BOOK</span>
          <span className="text-red-500">W</span>
          <span className="text-black">ORM</span>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center space-x-6">
            {/* Action Button with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-400 transition"
              >
                Action <FontAwesomeIcon icon={faChevronDown} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/my-feed"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Feed
                  </Link>
                  <Link
                    to="/add-book"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Add Book
                  </Link>
                  <Link
                    to="/borrowed-books"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Borrowed Books
                  </Link>
                </div>
              )}
            </div>

            {/* User badge with first letter of the email */}
            <div className="flex items-center space-x-2">
              <div className="inline-block bg-gray-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
                {userEmail.charAt(0).toUpperCase()}
              </div>
              <span className="text-gray-700">{userEmail}</span>
            </div>

            {/* Logout button */}
            <button
              onClick={onLogout}
              className="flex items-center text-gray-700 hover:text-black"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-6">
            {/* Login and Signup buttons */}
            <Link
              to={"/login"}
              className="flex items-center text-gray-700 hover:text-black"
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
                Login
              </span>
            </Link>
            <Link
              to={"/register"}
              className="flex items-center text-gray-700 hover:text-black"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
                Signup
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
