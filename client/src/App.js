import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFeedPage from './pages/MyFeedPage';
import AddBookPage from './pages/AddBookPage';
import BorrowedBooksPage from './pages/BorrowedBooksPage';
import Header from './components/Header';
import EditBookPage from './pages/EditBookPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute'; // Import PublicRoute
import { useState, useEffect } from 'react';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Callback to update login state
  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Check for token and email in localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []); // Run this effect only once, when the component mounts

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Public routes for login and register pages */}
        <Route
          path="/login"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Login onLogin={handleLogin} />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Register />
            </PublicRoute>
          }
        />

        {/* Protect Routes using ProtectedRoute */}
        <Route
          path="/my-feed"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyFeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-book"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AddBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/borrowed-books"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BorrowedBooksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-book/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <EditBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-details/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookDetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
