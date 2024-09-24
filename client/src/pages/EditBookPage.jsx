import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../api';

const EditBookPage = () => {
  const { id } = useParams(); // Get book ID from the URL
  const [book, setBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    availableCopies: 1,
  });
  const [image, setImage] = useState(null); // For handling image upload
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await getBookById(id); // Fetch book details
      setBook(data);
      setFormData({
        title: data.title,
        author: data.author,
        genre: data.genre,
        publicationDate: new Date(data.publicationDate).toISOString().split('T')[0],
        availableCopies: data.availableCopies,
      });
    };

    fetchBook();
  }, [id]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Handle file input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = new FormData();
    updatedFormData.append('title', formData.title);
    updatedFormData.append('author', formData.author);
    updatedFormData.append('genre', formData.genre);
    updatedFormData.append('publicationDate', formData.publicationDate);
    updatedFormData.append('availableCopies', formData.availableCopies);

    if (image) {
      updatedFormData.append('image', image); // Append image if changed
    }

    try {
      await updateBook(id, updatedFormData);
      navigate('/my-feed'); // Redirect to "My Feed" after updating
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-8">Edit Book</h2>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Author"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Genre</label>
            <input
              type="text"
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Genre"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Publication Date</label>
            <input
              type="date"
              value={formData.publicationDate}
              onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Available Copies</label>
            <input
              type="number"
              value={formData.availableCopies}
              onChange={(e) => setFormData({ ...formData, availableCopies: e.target.value })}
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
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookPage;
