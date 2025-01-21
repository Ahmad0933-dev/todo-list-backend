
# Todo-List Backend

This backend project is built using Node.js, Prisma, and MySQL. It uses XAMPP as the local development server for MySQL database management.

## Features

- CRUD operations with Prisma ORM.
- Integration with MySQL database.
- Scalable and modular code structure.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Prisma**: ORM for database modeling and querying.
- **MySQL**: Relational database for data storage.
- **XAMPP**: Local development server for MySQL.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [XAMPP](https://www.apachefriends.org/index.html) for managing MySQL
- [Prisma CLI](https://www.prisma.io/docs/getting-started)
- A code editor like [VS Code](https://code.visualstudio.com/).

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

1. Open XAMPP and start the MySQL server.
2. Create a database named `database_name` in phpMyAdmin.

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=8000
BASE_URL="http://localhost:8000"
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD=""
DB_NAME=""
DATABASE_URL="mysql://root:password@localhost:3306/database_name"
```

### 5. Generate prisma

Run the Prisma generate command:

```bash
prisma generate
```

### 6. Migrate the Database

Run the Prisma migration command:

```bash
npx prisma migrate dev
```

### 7. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

## Project Structure

```plaintext
backend-project/
├── prisma/
│   ├── schema.prisma      # Prisma schema for database modeling
│   └── migrations/        # Database migration files
├── src/
│   ├── controllers/       # Route handlers
│   ├── models/            # Database models (Prisma)
│   ├── routes/            # API routes
│   ├── middlewares/       # Custom middleware
│   └── utils/             # Utility functions
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm start`: Run the production build.
- `npx prisma studio`: Open Prisma Studio to view and manage the database.

## Additional Notes

- Make sure your MySQL server is running via XAMPP before starting the server.
- Also Make sure to run "prisma generate" command before starting the server.
- Use [Postman](https://www.postman.com/) or similar tools to test the API endpoints.

## Resources

- [Node.js Documentation](https://nodejs.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [XAMPP Documentation](https://www.apachefriends.org/docs/)
