import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

// In-memory storage
const users = [];
const books = [];

/**
 * Add a new user
 */
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  const newUser = {
    id: uuidv4(),
    name,
    borrowedBookId: null,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

/**
 * Add a new book
 */
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ message: 'Title and author are required' });

  const newBook = {
    id: uuidv4(),
    title,
    author,
    isBorrowed: false,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

/**
 * Borrow a book
 */
app.post('/borrow', (req, res) => {
  const { userId, bookId } = req.body;

  const user = users.find(u => u.id === userId);
  const book = books.find(b => b.id === bookId);

  if (!user || !book) {
    return res.status(404).json({ message: 'User or Book not found' });
  }

  if (book.isBorrowed) {
    return res.status(400).json({ message: 'Book is already borrowed' });
  }

  if (user.borrowedBookId) {
    return res.status(400).json({ message: 'User already borrowed a book' });
  }

  book.isBorrowed = true;
  user.borrowedBookId = book.id;

  res.json({ message: 'Book borrowed successfully', user, book });
});

/**
 * Return a book
 */
app.post('/return', (req, res) => {
  const { userId } = req.body;

  const user = users.find(u => u.id === userId);
  if (!user || !user.borrowedBookId) {
    return res.status(400).json({ message: 'User has not borrowed any book' });
  }

  const book = books.find(b => b.id === user.borrowedBookId);
  if (book) {
    book.isBorrowed = false;
  }

  user.borrowedBookId = null;
  res.json({ message: 'Book returned successfully', user });
});

/**
 * List all users
 */
app.get('/users', (req, res) => {
  res.json(users);
});

/**
 * List all books
 */
app.get('/books', (req, res) => {
  res.json(books);
});

/**
 * Run server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📚 Book Lending API running at http://localhost:${PORT}`);
});
