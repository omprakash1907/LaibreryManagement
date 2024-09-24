import React, { useState, useEffect } from 'react';
import { getBooksByBorrower } from '../api';
import BookCard from '../components/BookCard';

const BorrowedBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await getBooksByBorrower();
        setBooks(data);
      } catch (err) {
        setError('Failed to load borrowed books');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-8">Borrowed Books</h2>
      <p className="text-center text-gray-500 mb-8">Here are the books you have borrowed from the library.</p>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooksPage;
