📚 Library Management System
This is a full-stack Library Management System that allows users to browse, borrow, return, and manage books. The system includes features for both regular users and administrators to interact with the library. The project is deployed with Vercel (Frontend) and Render (Backend).

🌐 Project Links
Frontend: Library Management Frontend
Backend: Library Management Backend
🎯 Features
🔑 User Registration & Authentication: Users can register, login, and logout using JWT-based authentication.
📖 Book Browsing: Browse the entire collection of available books.
📚 Borrow & Return Books: Logged-in users can borrow and return books based on availability.
✍️ Add Books: Admin users can add new books to the catalog.
🛠 Edit & Delete Books: Admin users can edit or remove books from the catalog.
📱 Responsive Design: The frontend is responsive, styled with TailwindCSS for a seamless experience across devices.
⚠️ Error Handling: Enhanced user interaction with SweetAlert2 for popups and notifications.
🛠 Tech Stack
Frontend
⚛️ React.js: JavaScript library for building user interfaces.
🎨 TailwindCSS: Utility-first CSS framework for fast styling.
📡 Axios: For making API requests to the backend.
🔗 React Router: For navigation and route management.
⚠️ SweetAlert2: For user-friendly pop-up alerts and confirmation messages.
🚀 Vercel: Deployed on Vercel for fast and scalable hosting.
Backend
⚙️ Node.js: JavaScript runtime for building scalable applications.
🛠 Express.js: Flexible Node.js web application framework.
🗄 MongoDB: NoSQL database for storing book and user data.
🌱 Mongoose: MongoDB object modeling for Node.js.
🔑 JWT (JSON Web Tokens): For secure user authentication and authorization.
📁 Multer: Middleware for handling image file uploads.
🖥 Render: Deployed on Render for backend hosting.
🚀 Getting Started
Prerequisites
Ensure you have the following installed before starting:

Node.js (v14+)
NPM (v6+)
MongoDB (local instance or MongoDB Atlas)
⚙️ Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/laibrery-management.git
cd laibrery-management
Install dependencies:

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
Environment Variables:
Create a .env file in the server directory and add the following:

bash
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
💻 Running the Application Locally
To run both frontend and backend, follow these steps:

Frontend:

bash
Copy code
cd client
npm start
Backend:

bash
Copy code
cd server
npm run dev
Access the application:
Frontend: http://localhost:3000
Backend: http://localhost:5000
📑 API Endpoints
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
