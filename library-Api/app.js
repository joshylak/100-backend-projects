import express from 'express';
import authorRoutes from './routes/authors.js';
import bookRoutes from './routes/books.js';

const app = express();
app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Library API running on port ${PORT}`));
