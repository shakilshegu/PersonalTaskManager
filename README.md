# PersonalTaskManager

PersonalTaskManager is a simple task and note management application with user authentication using JWT.

## Setup Instructions
### 1. Create a File
Create the necessary files and establish the project structure.

### 2. Import Express

npm install express

### 3.Setup dotenv

npm install dotenv
Set up dotenv to manage environment variables.

### Connecting Server

Configure and set up  Express server.

### Config Prisma
npm install @prisma/client
Configure Prisma for database interactions.

### Create a Database
Set up your database (e.g., PostgreSQL, MySQL) and define data models.

#### Connecting Database and Set Environment
Connect your Prisma client to the database and set up environment variables.

### Implement JWT

npm install jsonwebtoken
Implement JSON Web Token (JWT) for user authentication.

### Complete User Login and Sign Up
Implement routes and controllers for user registration, login, and authentication middleware.

### Completed CRUD Operations for Notes and Tasks
Implement routes and controllers for creating, reading, updating, and deleting notes and tasks.

### Fixing Bugs and Code Refactoring
Perform bug fixes, code refactoring, and optimization.

### Finally Successful Completion
Test the application thoroughly and ensure all features work as expected.

### API Endpoints
User Authentication:

POST /register: Register a new user.
POST /login: Log in an existing user.
Notes:

GET /notes: Retrieve all user notes.
POST /notes: Create a new note.
PUT /notes/:noteId: Update a note.
DELETE /notes/:noteId: Delete a note.

Tasks:
GET /tasks: Retrieve all user tasks.
POST /tasks: Create a new task.
PUT /tasks/:taskId: Update a task.
DELETE /tasks/:taskId: Delete a task.