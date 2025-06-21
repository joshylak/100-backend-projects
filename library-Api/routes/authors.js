import express from 'express';
import { authors } from '../data/authors.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

// Create Author
router.post('/', (req, res) => {
    const { name } = req.body;
    const author = { id: uuid(), name };
    authors.push(author);
    res.status(201).json(author);
});

// Get All Authors
router.get('/', (req, res) => {
    res.json(authors);
});

// Get Single Author
router.get('/:id', (req, res) => {
    const author = authors.find(a => a.id === req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
});

// Update Author
router.put('/:id', (req, res) => {
    const author = authors.find(a => a.id === req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    author.name = req.body.name;
    res.json(author);
});

// Delete Author
router.delete('/:id', (req, res) => {
    const index = authors.findIndex(a => a.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Author not found' });
    authors.splice(index, 1);
    res.json({ message: 'Author deleted' });
});

export default router;
