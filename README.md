# React To-Do App

A simple To-Do app built with React. This app allows users to add tasks, mark them as complete, and remove tasks.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Task Component](#task-component)
- [Styling](#styling)
- [Usage](#usage)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

3. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Start the application:

    ```bash
    npm start
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure

- `src/components/Task.js`: Contains the Task component for rendering individual tasks.
- `src/App.js`: Main component managing the app state and rendering the task list.

## Task Component

The Task component receives the following props:

- `task`: An object representing the task with properties like text and isComplete.
- `index`: The index of the task in the list.
- `toggleTask`: Function to toggle the completion status of the task.
- `removeTask`: Function to remove the task from the list.

## Styling

Basic CSS styling with distinct styles for completed tasks.

## Usage

### Adding a Task:

1. Type the task in the input field.
2. Press Enter to add the task to the list.

### Completing a Task:

- Click on a task or the "Completed" button to toggle its completion status.

### Removing a Task:

- Click on the "Remove" button to delete a task.