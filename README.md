# ERP System

This project is an ERP (Enterprise Resource Planning) system built using Node.js, Express.js, and MongoDB. The ERP system is designed to streamline business processes, manage resources efficiently, and provide an easy-to-use interface for managing various aspects of a business.

## Technologies Used

- **Node.js**: JavaScript runtime environment that allows you to run JavaScript code on the server side.
- **Express.js**: A web application framework for Node.js, used for building APIs and handling routing.
- **MongoDB**: A NoSQL database used to store data in a flexible, scalable format.
- **Mongoose**: MongoDB object modeling tool for Node.js, providing a straight-forward, schema-based solution to model your application data.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **Bcryptjs**: For hashing passwords to ensure security.
- **Dotenv**: For managing environment variables.
- **Cors**: For enabling Cross-Origin Resource Sharing to allow requests from different domains.

## Features

- User authentication and authorization using JWT.
- CRUD operations for managing business resources (e.g., employees, customers, products).
- Easy management of roles and permissions.
- Real-time data updates using WebSockets (if implemented).
- Scalable architecture using MongoDB for data storage.

## Installation

### Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (either locally or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Clone the repository

```bash
git clone https://github.com/Otelbayev/erp-system.git
```
cd erp-system
Install dependencies
```bash
npm install
```
Configure Environment Variables
Create a .env file in the root of the project and add the following variables:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/erp-system
JWT_SECRET=your_jwt_secret
MONGO_URI: URL to connect to your MongoDB instance.
```
JWT_SECRET: A secret key used to sign and verify JWT tokens.

Run the Application
To start the application, run the following command:

```bash
npm start
```
This will start the Express server on port 5000 (or the port defined in your .env file). You can access the API at http://localhost:5000.

API Documentation
Authentication
POST /api/auth/register: Registers a new user.

POST /api/auth/login: Authenticates an existing user and returns a JWT token.

User Management
GET /api/users: Fetches all users.

POST /api/users: Creates a new user.

PUT /api/users/:id: Updates a user's information.

DELETE /api/users/:id: Deletes a user.

Resource Management (Example: Employees)
GET /api/employees: Fetches all employees.

POST /api/employees: Creates a new employee.

PUT /api/employees/:id: Updates employee information.

DELETE /api/employees/:id: Deletes an employee.

Contributing
If you would like to contribute to the project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-name).

Create a new pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Express.js

MongoDB

Mongoose

JWT

Bcryptjs

Dotenv

Cors
