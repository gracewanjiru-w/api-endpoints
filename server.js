// index.js
const express = require('express')
const app = express()
app.use(express.json())

// In-memory data store
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
]

// Get user by id (provided)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})

// create a new user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    const newUser = { id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name, email };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
    
});

// update an existing user
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found.' });
    }

    if (!name && !email) {
        return res.status(400).json({ success: false, message: 'At least one field (name or email) must be updated.' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    res.status(200).json({ success: true, data: user });
});

// delete a user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ success: false, message: 'User not found.' });
    }

    users.splice(userIndex, 1);
    res.status(200).json({ success: true, message: 'User deleted successfully.' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error.' });
});

//start the server
app.listen(3000, () => {
  console.log('Server running on port 3000')
})