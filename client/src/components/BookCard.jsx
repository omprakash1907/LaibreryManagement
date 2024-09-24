import React, { useState } from 'react';
import { deleteBook } from '../api'; // Import delete API function
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const BookCard = ({ book, userEmail, showActions = false }) => {
  const baseImageUrl = 'http://localhost:5000'; // Update this if necessary
  const navigate = useNavigate();
  
  // Handle delete book
  const handleDelete = async () => {
    try {
      await deleteBook(book._id);
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Handle edit book navigation
  const handleEdit = () => {
    navigate(`/edit-book/${book._id}`);
  };

  // Handle view details navigation
  const handleViewDetails = () => {
    navigate(`/book-details/${book._id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div className="flex justify-center">
        <img
          src={book.imageUrl ? `${baseImageUrl}${book.imageUrl}` : '/default-book.jpg'}
          alt={book.title}
          className="object-cover rounded-md mb-4"
          style={{ width: '100%', height: '500px' }} // Set full width and fixed height
        />
      </div>
      <h3 className="text-lg font-bold text-center">{book.title}</h3>
      <p className="text-sm text-gray-500 text-center">By {book.author}</p>
      <p className="text-sm text-gray-500 text-center">Genre: {book.genre}</p>
      <p className="text-sm text-gray-500 text-center">
        Published: {new Date(book.publicationDate).toLocaleDateString()}
      </p>

      {/* Conditionally render buttons */}
      <div className="flex justify-around mt-4">
        {showActions ? (
          <>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-1/2 me-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-1/2 ms-2"
            >
              Delete
            </button>
          </>
        ) : (
          <button
            onClick={handleViewDetails}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-full"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
