import React, { useState, useEffect } from 'react';
import { getBooksByCreator } from '../api'; 
import BookCard from '../components/BookCard';

const MyFeedPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const userEmail = localStorage.getItem('email'); // Get logged-in user's email

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await getBooksByCreator(); // Fetch books created by the logged-in user
        setBooks(data);
      } catch (err) {
        setError('Failed to load your books');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-8">My Feed</h2>
      <p className="text-center text-gray-500 mb-8">Here are the books you have added to the library.</p>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book._id} book={book} userEmail={userEmail} showActions={true} /> 
          ))
        ) : (
          <p className="text-center">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default MyFeedPage;
