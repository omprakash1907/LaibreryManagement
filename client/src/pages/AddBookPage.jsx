import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../api'; // Import the API function to create a book
import Swal from 'sweetalert2';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [availableCopies, setAvailableCopies] = useState(1);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send file and other book data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);
    formData.append('publicationDate', publicationDate);
    formData.append('availableCopies', availableCopies);
    if (image) formData.append('image', image);

    try {
      await createBook(formData);
      Swal.fire({
        icon: 'success',
        title: 'Book Added',
        text: 'The book has been added to the library!',
      }).then(() => {
        navigate('/'); // Navigate to home after submission
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add book. Please try again.',
      });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-8">Add Book</h2>
      <p className="text-center text-gray-500 mb-8">Add a new book to the library.</p>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Genre</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Publication Date</label>
            <input
              type="date"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Available Copies</label>
            <input
              type="number"
              value={availableCopies}
              onChange={(e) => setAvailableCopies(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Book Cover Image</label>
            <input type="file" onChange={handleFileChange} className="w-full px-3 py-2" />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200 shadow-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;
