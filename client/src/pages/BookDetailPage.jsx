import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, borrowBook, returnBook } from '../api';
import Swal from 'sweetalert2';

const BookDetailPage = () => {
  const { id } = useParams(); // Get book ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [availableCopies, setAvailableCopies] = useState(0);

  // Get the user's email from localStorage
  const userEmail = localStorage.getItem('email');
  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await getBookById(id); // Fetch book details
        setBook(data);
        setAvailableCopies(data.availableCopies);

        // Check if the current user has already borrowed the book
        if (data.borrowedBy.includes(userEmail)) {
          setIsBorrowed(true); // Set `isBorrowed` to true if the user has borrowed the book
        } else {
          setIsBorrowed(false); // Set `isBorrowed` to false if not borrowed
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id, userEmail]);

  const handleBorrow = async () => {
    if (!isLoggedIn) {
      // Show SweetAlert2 popup if the user is not logged in
      Swal.fire({
        icon: 'warning',
        title: 'Please login',
        text: 'You need to be logged in to borrow a book.',
        showConfirmButton: true,
      });
      return;
    }

    try {
      await borrowBook(book._id);
      setIsBorrowed(true); // Mark as borrowed
      setAvailableCopies((prevCopies) => prevCopies - 1); // Decrease available copies
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  const handleReturn = async () => {
    try {
      await returnBook(book._id);
      setIsBorrowed(false); // Mark as not borrowed
      setAvailableCopies((prevCopies) => prevCopies + 1); // Increase available copies
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="bg-white shadow-lg rounded-lg p-8 flex items-start">
        {/* Book Cover */}
        <img
          src={book.imageUrl ? `https://laibrerymanagement.onrender.com${book.imageUrl}` : '/default-book.jpg'}
          alt={book.title}
          className="w-1/3 h-auto object-cover rounded-md mr-8"
        />

        {/* Book Details */}
        <div className="w-2/3">
          <h2 className="text-4xl font-bold mb-4">{book.title}</h2>
          <p className="text-xl text-gray-700 mb-2">By {book.author}</p>
          <p className="text-sm text-gray-500 mb-4">Genre: {book.genre}</p>
          <p className="text-sm text-gray-500 mb-4">
            Published: {new Date(book.publicationDate).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-900 mb-6">Available Copies: {availableCopies}</p>

          {/* Borrow and Return Buttons */}
          <div className="flex space-x-4">
            {!isBorrowed && availableCopies > 0 && (
              <button
                onClick={handleBorrow}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Borrow
              </button>
            )}
            {isBorrowed && (
              <button
                onClick={handleReturn}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Return
              </button>
            )}
            <button
              onClick={() => navigate('/')}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
