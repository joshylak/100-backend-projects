import express from 'express';
import { books } from '../data/books.js';
import { authors } from '../data/authors.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

// Create Book
router.post('/', (req, res) => {
  const { title, authorId } = req.body;
  const author = authors.find(a => a.id === authorId);
  if (!author) return res.status(400).json({ message: 'Invalid authorId' });

  const book = { id: uuid(), title, authorId };
  books.push(book);
  res.status(201).json(book);
});

// Get All Books
router.get('/', (req, res) => {
  res.json(books);
});

// Get Single Book
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Update Book
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, authorId } = req.body;
  const author = authors.find(a => a.id === authorId);
  if (!author) return res.status(400).json({ message: 'Invalid authorId' });

  book.title = title;
  book.authorId = authorId;
  res.json(book);
});

// Delete Book
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(index, 1);
  res.json({ message: 'Book deleted' });
});

export default router;
