# Full Stack MERN App: Exercise Tracker

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to track exercises. It supports CRUD operations and features a React-based Single Page Application (SPA) for user interaction. This app demonstrates the implementation of modern web development techniques and serves as a portfolio project.

---

## Features

- **REST API:** A backend implemented with Node.js and Express.js to handle CRUD operations for exercises.
- **Frontend SPA:** A React app that provides an intuitive interface for managing exercises.
- **Database:** Data persistence using MongoDB, storing details about exercises.
- **Responsive Design:** Clean and interactive UI built with semantic HTML and CSS.

---

## Data Model

Each exercise in the database has the following schema:

| Property | Data Type | Description |
|----------|-----------|-------------|
| `name`   | `String`  | Name of the exercise |
| `reps`   | `Number`  | Number of repetitions |
| `weight` | `Number`  | Weight used in the exercise |
| `unit`   | `String`  | Unit of weight (`kgs` or `lbs`) |
| `date`   | `String`  | Date performed (MM-DD-YY) |

---

## REST API Endpoints

### 1. **POST** `/exercises`  
Create a new exercise entry.

### 2. **GET** `/exercises`  
Retrieve all exercise entries.

### 3. **GET** `/exercises/:_id`  
Retrieve a single exercise by its ID.

### 4. **PUT** `/exercises/:_id`  
Update an existing exercise.

### 5. **DELETE** `/exercises/:_id`  
Delete an exercise by its ID.

---

## React Frontend

### Pages
1. **Home Page**
   - Displays all exercises in a table.
   - Allows editing or deleting exercises.

2. **Edit Exercise Page**
   - Pre-populated form to edit an existing exercise.
   - Provides feedback on successful or failed updates.

3. **Create Exercise Page**
   - Form to add a new exercise.
   - Provides feedback on successful or failed creation.

### Navigation
- Accessible links to Home and Create Exercise pages via a navigation bar.

### Design
- Styled using App.css, including rules for tables, forms, and global elements.
- Semantic layout with `<header>`, `<footer>`, and `<nav>` tags.

---

## Technical Details

- **React:** Function-based components.
- **MongoDB:** Collection named `exercises`.
- **Environment Variables:** `.env` file used for configuration:
  - `PORT=8000` (React app)
  - `MONGODB_CONNECT_STRING=<connection_string>` (REST API)
- **Proxy Setup:** React app proxies API requests to the backend.

---

## Deployment

### Prerequisites
- Install Node.js and MongoDB.
- Clone the repository and navigate to the project directories.

### Steps
1. **Backend (REST API):**
   - Navigate to the backend directory.
   - Run `npm install` to install dependencies.
   - Start the server with `npm start`.
   
2. **Frontend (React App):**
   - Navigate to the frontend directory.
   - Run `npm install` to install dependencies.
   - Start the app with `npm start`.

---

## Future Enhancements

- Deploy the app to a cloud platform (AWS or GCP)
- Add user authentication using a service like Auth0.
