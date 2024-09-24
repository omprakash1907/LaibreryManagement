Library Management System
This is a full-stack Library Management System that allows users to browse, borrow, return, and manage books. The system includes features for both regular users and administrators to interact with the library. The project is deployed on Vercel for the frontend and Render for the backend.

Project Links
Frontend: [Library Management Frontend](https://laibrery-management.vercel.app/)
Backend: [Library Management Backend](https://laibrerymanagement.onrender.com/)
Features
User Registration & Authentication: Users can register, login, and logout using JWT-based authentication.
Book Browsing: Users can browse a collection of books available in the library.
Borrow & Return Books: Logged-in users can borrow and return books based on availability.
Add Books: Admin users can add new books to the library's catalog.
Edit & Delete Books: Admin users can edit or delete books from the library.
Responsive Design: The frontend is fully responsive, designed using TailwindCSS for a seamless experience on all devices.
Error Handling: Proper error handling using SweetAlert2 for popups and notifications.
Tech Stack
Frontend
React.js: JavaScript library for building user interfaces.
TailwindCSS: A utility-first CSS framework for styling.
Axios: For making API requests to the backend.
React Router: For navigation and route management.
SweetAlert2: For user-friendly pop-up alerts and confirmation messages.
Vercel: Deployed on Vercel for fast and scalable hosting.
Backend
Node.js: JavaScript runtime for building scalable network applications.
Express.js: Minimal and flexible Node.js web application framework.
MongoDB: NoSQL database for storing book and user data.
Mongoose: MongoDB object modeling for Node.js.
JWT (JSON Web Tokens): For secure user authentication and authorization.
Multer: Middleware for handling image file uploads.
Render: Deployed on Render for hosting the backend services.
Getting Started
Prerequisites
Before you can run this project locally, make sure you have the following installed:

Node.js (v14+)
NPM (v6+)
MongoDB (local instance or MongoDB Atlas)
Setup
Clone the repository

bash
Copy code
git clone https://github.com/yourusername/laibrery-management.git
cd laibrery-management
Install dependencies

For the frontend:

bash
Copy code
cd client
npm install
For the backend:

bash
Copy code
cd server
npm install
Environment Variables

Create a .env file in the server directory and add the following environment variables:

bash
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Running the Application Locally

To run the frontend:

bash
Copy code
cd client
npm start
To run the backend:

bash
Copy code
cd server
npm run dev
Accessing the Application

The frontend will be running on http://localhost:3000
The backend will be running on http://localhost:5000
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login and receive a JWT.
Books
GET /api/books: Get all available books.
GET /api/books/:id: Get details of a specific book by ID.
POST /api/books: Add a new book (Admin only).
PUT /api/books/:id: Edit an existing book (Admin only).
DELETE /api/books/:id: Delete a book (Admin only).
POST /api/books/:id/borrow: Borrow a book (Authenticated users).
POST /api/books/:id/return: Return a borrowed book (Authenticated users).
User Books
GET /api/books/user/created: Get books created by the logged-in user (Admin).
GET /api/books/user/borrowed: Get books borrowed by the logged-in user.
