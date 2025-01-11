const express = require('express');
const app = express();
const PORT = 5000;

// Import video streaming routes
const videoRouter = require('./video');

// Use video streaming routes
app.use('/video', videoRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
