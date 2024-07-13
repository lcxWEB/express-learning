// const express = require('express');

import express from 'express';

const router = express.Router();

let posts = [
    { id: 1, title: 'Post 1', content: 'This is post 1' },
    { id: 2, title: 'Post 2', content: 'This is post 2' },
    { id: 3, title: 'Post 3', content: 'This is post 3' },
    { id: 4, title: 'Post 4', content: 'This is post 4' },
    { id: 5, title: 'Post 5', content: 'This is post 5' },
];

// router.get('/api/posts', (req, res) => {
//     // res.json(posts);
//     res.send(posts);
// });

router.get('/', (req, res) => {
    // when req.query.limit = 0, the limit will be 10, because 0 is falsy
    const limit = parseInt(req.query.limit) || 10;
    console.log(limit);
    if (isNaN(limit) || limit < 1) {
        return res.status(400).send({error: 'Invalid limit query'});
        // return;
    }
    res.send(posts.slice(0, limit));
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    // res.send(posts);
    const post = posts.find(p => p.id === parseInt(req.params.id));
    // const post = posts.filter(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send({error: `The post with the given ID ${req.params.id} was not found.`});
    }
    res.send(post);
});

// commons js module system
// module.exports = router;
export default router;