import React, { useState, useEffect } from "react";
import { getBooks } from "../api"; // Import the getBooks function from API
import BookCard from "../components/BookCard"; // Import the BookCard component
import Banner from "../components/Banner";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await getBooks(); // Fetch all books from the API
        setBooks(data);
      } catch (err) {
        setError("Failed to load books");
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center my-8">New Arrivals</h2>
        <p className="text-center text-gray-500 mb-8">
          Reading helps you develop your communication skills
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
