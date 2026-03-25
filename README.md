# BlogVilla

## Project Overview
BlogVilla is a modern blogging platform that allows users to create, manage, and share blogs seamlessly. The platform emphasizes simplicity and user experience, combining powerful features with an intuitive interface.

## Features
- User authentication (Registration & login)
- CRUD operations for posts and comments
- Rich text editor for blog content
- Categorization and tagging of blogs
- Responsive design for mobile and desktop
- API support for integration with other services

## Tech Stack
- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Docker, AWS

## Installation
To install and run BlogVilla locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/LittleJoeHarp/BlogVilla.git
   ```
2. Navigate into the project directory:
   ```bash
   cd BlogVilla
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## API Endpoints
- **GET /api/posts** - Retrieve all posts
- **POST /api/posts** - Create a new post
- **GET /api/posts/:id** - Retrieve a single post by ID
- **PUT /api/posts/:id** - Update an existing post
- **DELETE /api/posts/:id** - Delete a post

## Environment Variables
Make sure to set up the following environment variables:
- `MONGODB_URI` - The connection string for MongoDB
- `JWT_SECRET` - Secret key for JWT authentication
- `PORT` - The port on which the server will run (default is 5000)

## Folder Structure
```
BlogVilla/
│
├── client/                # Frontend application
├── server/                # Backend application
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── controllers/       # Controller logic
│   └── config/            # Configuration files
└── README.md              # Project documentation
```

## Deployment
BlogVilla can be deployed using Docker. To deploy the application, run:
```bash
docker-compose up --build
```

## Usage Instructions
Once the application is running, navigate to `http://localhost:5000` in your web browser to access the platform. You can register a new account, log in, and start creating blogs!