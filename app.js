const express = require("express");
const app = express();

//  Middleware to parse JSON in POST requests
app.use(express.json());

//  In-memory array to store users
const users = [];

// Root route
app.get("/", (req, res) => {
res.send("Hello, Express!");
});
//  POST /users – Create a new user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
res.json(users);
});

// Start the server
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});



