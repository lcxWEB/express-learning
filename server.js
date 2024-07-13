const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

// app.use(express.json());

let posts = [
    { id: 1, title: 'Post 1', content: 'This is post 1' },
    { id: 2, title: 'Post 2', content: 'This is post 2' },
    { id: 3, title: 'Post 3', content: 'This is post 3' },
    { id: 4, title: 'Post 4', content: 'This is post 4' },
    { id: 5, title: 'Post 5', content: 'This is post 5' },
];

app.get('/api/posts', (req, res) => {
    // res.json(posts);
    res.send(posts);

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});