// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle JSON payloads
app.use(express.json());

// Example route to handle API requests
app.get('/api/data', (req, res) => {
  // Handle the request here
  res.json({ message: 'Data from the server' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
