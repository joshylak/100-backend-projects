const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../data/posts');

// Get all posts
router.get('/', (req, res) => {
  res.json(db.getAll());
});

// Get single post
router.get('/:id', (req, res) => {
  const post = db.getById(req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

// Create post
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
 if (!title || !content || !author) return res.status(400).json({ message: 'Missing fields' });
  const newPost = {
    id: uuidv4(),
    title,
    content,
    author,
    createdAt: new Date()
  };
  db.create(newPost);
  res.status(201).json(newPost);
});

// Update post
router.put('/:id', (req, res) => {
  const updated = db.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Post not found' });
  res.json(updated);
});

// Delete post
router.delete('/:id', (req, res) => {
  const deleted = db.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Post not found' });
  res.json({ message: 'Post deleted' });
});

module.exports = router;