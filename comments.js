// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a variable to store the comments
const comments = [];

// Create a GET endpoint to retrieve all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST endpoint to add a new comment
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(req.body);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Create a POST request to add a new comment
fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        comment: 'Hello, world!'
    })
}).then(response => response.json())
.then(data => console.log(data));

// Create a GET request to retrieve all comments
fetch('http://localhost:3000/comments')
.then(response => response.json())
.then(data => console.log(data));