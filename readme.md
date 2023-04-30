# Budget Manager App

This is a full-stack web application that allows users to track their income and expenses. The application has two main parts: a backend built with Node.js and Express.js, and a frontend built with React.

Note: This project is still under development and it has bugs and incomplete features.

## Features

- User authentication with JWT
- Add, edit, and delete income and expense data
- Display total income and expenses in a dashboard view
- See their income and expenses history in a table
- Responsive design optimized for both desktop and mobile devices

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- React
- Redux
- React Router
- Sass

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies for the frontend and backend:

- For the frontend, run npm install in the client directory
- For the backend, run npm install in the server directory

4. Set up the environment variables:
   Create a `.env` file in the server directory
   Add the following variables to the file:
   PORT=`the port number for the server`
   DATABASE=`the URI for your MongoDB database`
   JWT_SECRET=`a secret key for JSON Web Tokens`
5. Start the server: `npm run dev` in the server directory
6. Start the frontend: `npm run dev` in the client directory
7. Open the application in your browser

## Usage

To use the application, follow these steps:

1. Create an account or log in with an existing one
2. Add income or expenses by clicking on the corresponding button in the navigation bar
3. View your income and expenses history on the dashboard or the history page
4. Edit or delete previously added income or expenses by clicking on the corresponding buttons in the table
