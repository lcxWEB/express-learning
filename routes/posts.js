// commons js module system
// const express = require('express');

// es6 module system
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
    // console.log(limit);
    if (isNaN(limit) || limit < 1) {
        return res.status(400).send({error: 'Invalid limit query'});
        // return;
    }
    res.send(posts.slice(0, limit));
});

router.get('/:id', (req, res) => {
    // console.log(req.params.id);
    // res.send(posts);
    const post = posts.find(p => p.id === parseInt(req.params.id));
    // const post = posts.filter(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send({error: `The post with the given ID ${req.params.id} was not found.`});
    }
    res.send(post);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    
    if (!newPost.title || !newPost.content) {
        return res.status(400).send({error: 'Title and content are required'});
    }
    posts.push(newPost);
    res.status(201).send(posts);
});

// update a post
router.put('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send({error: `The post with the given ID ${req.params.id} was not found.`});
    }
    post.title = req.body.title;
    post.content = req.body.content;
    res.send(post);
});

// delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send({error: `The post with the given ID ${req.params.id} was not found.`});
    }
    
    // posts = posts.filter(p => p.id !== id);
    // res.send(posts);

    const index = posts.indexOf(post);
    posts.splice(index, 1);
    res.send(posts);
});

// commons js module system
// module.exports = router;
export default router; 