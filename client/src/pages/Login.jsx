import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // Import the centralized function
import Swal from "sweetalert2";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password }); // Call the centralized API function
      localStorage.setItem("token", data.token); // Store token
      localStorage.setItem("email", email); // Store email

      // Update login state
      onLogin(email);

      // Success Alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have been successfully logged in!",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        navigate("/"); // Redirect to homepage after success
      });
    } catch (error) {
      setError("Invalid credentials");

      // Error Alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with the login!",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          <div className="text-3xl font-bold  text-red-500">
            <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-full mb-3">
              Login
            </span>
            <br />
            <span className="text-black">BOOK</span>
            <span className="text-red-500">W</span>
            <span className="text-black">ORM</span>
          </div>
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
