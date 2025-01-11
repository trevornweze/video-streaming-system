// authService/index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Example route
app.post('/register', (req, res) => {
  // Handle user registration
  res.send("User registered");
});

app.listen(5001, () => {
  console.log("Auth Service running on port 5001");
});
