# BlogVilla

## Overview
BlogVilla is a modern blogging platform that allows users to create, manage, and share their blogs with ease. With a focus on user experience, BlogVilla provides a clean and intuitive interface for both readers and writers.

## Features
- User authentication and authorization
- Create, edit, and delete posts
- Comment on posts
- Like and share posts
- Responsive design
- Admin panel for managing users and posts

## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Deployment: Heroku, Vercel

## Setup Instructions
1. Clone the repository: 
   ```bash
   git clone https://github.com/LittleJoeHarp/BlogVilla.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BlogVilla
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables following the `.env.example` file.
5. Start the application:
   ```bash
   npm start
   ```

## API Endpoints
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user
- `GET /api/posts`: Get all posts
- `POST /api/posts`: Create a new post (JWT required)
- `PUT /api/posts/:id`: Update a post (JWT required)
- `DELETE /api/posts/:id`: Delete a post (JWT required)

## Deployment
BlogVilla is deployed on Heroku and can also be hosted on Vercel for frontend hosting. Follow the respective documentation for deployment details.