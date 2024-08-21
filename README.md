# GraphQL Test Project

This project is a test setup for learning GraphQL with a full-stack application using NestJS, Sequelize, PostgreSQL on the backend, and Next.js on the frontend.

## Tech Stack

- **Backend:**

  - NestJS
  - GraphQL
  - Sequelize ORM
  - PostgreSQL

- **Frontend:**
  - Next.js

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Kr-Upendra/graphtest.git
   cd graphtest
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

3. **Install Dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

4. **Configure Environment Variables:**

Create a .env file in the backend directory with the following content:

    ```bash
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=your-username
    DATABASE_PASSWORD=your-password
    DATABASE_NAME=graphql_test_db
    ```
