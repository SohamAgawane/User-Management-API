# 📌 User Management API

This is a **RESTful API** built using **Node.js**, **Express.js**, and **MongoDB** for managing users. It provides endpoints for creating, retrieving, updating, and deleting user records.

## ✨ Features
- ✅ CRUD operations for users
- ✅ MongoDB integration with Mongoose
- ✅ Middleware for request logging
- ✅ Express Router for modular routing

## 📂 Project Structure
```
📦 user-management-api
├── 📁 controllers
│   ├── user.js        # Handles user-related logic
├── 📁 models
│   ├── user.js        # User schema using Mongoose
├── 📁 middlewares
│   ├── index.js       # Request logging middleware
├── 📁 routes
│   ├── user.js        # API routes for users
├── connection.js      # MongoDB connection logic
├── index.js           # Main entry point of the server
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## 🚀 Installation & Setup

### 📌 Prerequisites
- 🟢 Node.js (>=14.x)
- 🟢 MongoDB installed and running locally or on the cloud

### 🛠 Steps to Run
1. **Clone this repository:**
   ```sh
   git clone https://github.com/SohamAgawane/User-Management-API.git
   cd User-Management-API
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start MongoDB (if running locally):**
   ```sh
   mongod
   ```
4. **Run the server:**
   ```sh
   node index.js
   ```
   The server will start on `PORT 8000`.

---

## 📡 API Endpoints

### 🏷 Users API

| Method | Endpoint         | Description               |
|--------|----------------|---------------------------|
| 🟢 GET    | `/api/users`   | Fetch all users         |
| 🟢 POST   | `/api/users`   | Create a new user       |
| 🟡 GET    | `/api/users/:id` | Get a user by ID       |
| 🟠 PATCH  | `/api/users/:id` | Update a user's last name |
| 🔴 DELETE | `/api/users/:id` | Delete a user         |

---

## 📤 Request & Response Examples

### 🆕 Create a User
**Request:**
```json
{
  "first_name": "Soham",
  "last_name": "Agawane",
  "email": "soham@example.com",
  "gender": "Male",
  "job_title": "Software Engineer"
}
```
**Response:**
```json
{
  "msg": "success",
  "id": "650f7b4e2b6a6a4aee8a8f78"
}
```

### ⚠️ Error Handling
- **If a required field is missing:**
  ```json
  {
    "msg": "All fields are required"
  }
  ```
- **If an invalid `id` is provided:**
  ```json
  {
    "msg": "Invalid User ID"
  }
  ```

---

## ⚙ Middleware
The `middlewares/index.js` file contains a custom logging middleware that logs requests to `log.txt`.

---

## 👨‍💻 Contribution Guidelines
1. **Fork the repository**.
2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes and commit:**
   ```sh
   git commit -m "Added a new feature"
   ```
4. **Push to your fork and create a pull request**.

---

## 📜 License
This project is licensed under the **MIT License**.
