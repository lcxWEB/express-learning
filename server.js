// const express = require('express');
// const posts = require('./routes/posts')

import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

const port = process.env.PORT || 3000;

const app = express();

// body parser middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: false })); // req.form-data

// logger middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});