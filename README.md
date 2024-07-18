# TalentFort Task Manager

A task management application built with React, Node.js, Express, and MongoDB. This application allows users to create, update, delete, and manage tasks with various priorities and statuses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, update, and delete tasks
- View task list with priorities and statuses
- Update task status (To-Do, In Progress, Completed)
- User-friendly interface

## Technologies Used

- **Frontend:**
  - React
  - CSS
- **Backend:**
  - Node.js
  - Express.js
- **Database:**
  - MongoDB

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/NeluniPriyangika/todo-app-NeluniPriyangika.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd talentfort-task-manager
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

5. **Start the frontend server:**

    ```bash
    cd frontend
    npm start
    ```

6. **Open the application in your browser:**

    ```bash
    http://localhost:3000
    ```
	
7. **The srver will run on port:**

    ```bash
    http://localhost:5000
    ```
	
8. **If you need to run with your MongoDB:**
	Edit the .env file with youe MONGO_URL
	MONGO_URL = {Your MongoDB URL}
	
	
## Usage

1. **Home Page:** View the list of tasks with their status and priority.
2. **Add Task:** Add new tasks with a title, description, due date, and priority.
3. **Update Task:** Update the status of existing tasks.
4. **Delete Task:** Remove tasks from the list.

## File Structure

```bash
talentfort-task-manager/
├── client/         # Frontend React code
│   ├── public/       # Public assets
│   ├── src/          # Source files
        ├── assets/     # All the assets of the project
│   │   ├── components/ # React components
│   │   ├── pages/      # React pages
│   │   ├── App.js      # Entry point for React app
│   │   └── ...         # Other frontend files
├── server/          # Backend Node.js code
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   ├── server.js     # Entry point for backend server
│   └── ...           # Other backend files


```
THank you...!
