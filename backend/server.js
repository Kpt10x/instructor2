const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let instructors = []; // Temporary in-memory data storage

// Add instructor
app.post('/api/instructors', (req, res) => {
  const instructor = req.body;
  instructor.id = instructors.length + 1; // Auto-generate ID
  instructors.push(instructor);
  res.status(201).send(instructor);
});

// Retrieve instructors
app.get('/api/instructors', (req, res) => {
  res.send(instructors);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    