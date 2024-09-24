import axios from 'axios';

const API = axios.create({
  baseURL: 'https://laibrerymanagement.onrender.com/api/', // Replace with your backend API URL
});

// Add token to the request headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Centralized API functions
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getBooks = () => API.get('/books'); // Fetch all books
export const getBookById = (id) => API.get(`/books/${id}`);
export const borrowBook = (id) => API.post(`/books/${id}/borrow`);
export const returnBook = (id) => API.post(`/books/${id}/return`);
export const createBook = (formData) => API.post('/books', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const updateBook = (id, formData) => API.put(`/books/${id}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const deleteBook = (id) => API.delete(`/books/${id}`);
export const getBooksByCreator = () => API.get('/books/user/created'); // Fetch books created by the logged-in user
export const getBooksByBorrower = () => API.get('/books/user/borrowed'); // Fetch books borrowed by the logged-in user

export default API;
