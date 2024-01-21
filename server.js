const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Simulated user data from JSONPlaceholder
const users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
  // Add more users as needed
];

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Simulate user registration
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
//   res.json(newUser);
  res.status(201).json({ message: 'Registration successful', status: true, user: newUser });
});

  // Login endpoint
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulate user login
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });

app.post('/reactivelogin', (req, res) => {
  const { username, password } = req.body;
  // Simulate user login
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


// Get user by ID endpoint
app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });


app.get('/userList', (req, res) => {
    
    
    res.status(200).json({ result: users });

  });


// Authenticate endpoint
app.post('/authenticate', (req, res) => {
  // Simulate authentication
  // In a real scenario, you might generate and send a token here
  res.json({ message: 'Authenticated' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

