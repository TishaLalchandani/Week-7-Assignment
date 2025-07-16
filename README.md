# JWT Auth API

A basic Node.js REST API for user signup, login, and protected route access using JWT.

## Features
- Signup & login with hashed passwords
- JWT authentication
- Protected dashboard route
- MongoDB with Mongoose

## Setup
1. Run `npm install`
2. Add `.env`:

PORT=5000
MONGO_URI=mongodb://localhost:27017/jwt-auth-db
JWT_SECRET=your_jwt_secret_key

3. Start server: `node server.js`

## Routes
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/protected/dashboard` (requires JWT token)

