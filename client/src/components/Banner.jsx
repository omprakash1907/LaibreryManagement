import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import banner from '../images/img1-12.png';

const Banner = () => {
  const navigate = useNavigate();

  // Handle Add Book button click
  const handleAddBookClick = () => {
    const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists

    if (!isLoggedIn) {
      // Show login alert if the user is not logged in
      Swal.fire({
        icon: 'warning',
        title: 'Please login',
        text: 'You need to be logged in to add a book.',
        showConfirmButton: true,
      });
    } else {
      // Navigate to the Add Book page if the user is logged in
      navigate('/add-book');
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left Side: Text Section */}
        <div className="w-1/2">
          <h4 className="text-gray-500 font-semibold uppercase">Largest Catalog</h4>
          <h1 className="text-6xl font-bold">
            Over <span className="text-red-400">12 Million</span> <br />Books
          </h1>
          <p className="text-gray-700 mt-4">
            Start your learning journey by browsing millions of books from our library.
          </p>
          <button
            onClick={handleAddBookClick}
            className="inline-block mt-6 px-8 py-3 bg-red-400 text-white font-semibold rounded hover:bg-red-500 transition"
          >
            Add Your Book
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 relative">
          <img src={banner} alt="Books" className="w-full h-30" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
