// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample data (for demonstration purposes)
const todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Walk the dog" },
];

// Create a route to get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Create a route to get a single todo by ID
app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

// Create a route to add a new todo
app.post("/api/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Create a route to update a todo by ID
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos[index] = { ...todos[index], ...updatedTodo };
  res.json(todos[index]);
});

// Create a route to delete a todo by ID
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
