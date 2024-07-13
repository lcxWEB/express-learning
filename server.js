const express = require('express');
const posts = require('./routes/posts')

const port = process.env.PORT || 3000;

const app = express();

// app.use(express.json());

// Routes
app.use('/api/posts', posts);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});