import express from 'express';
import moviesRoutes from './routes/movies.js';
import showsRoutes from './routes/shows.js';

const app = express();
app.use(express.json());

app.use('/api/movies', moviesRoutes);
app.use('/api/shows', showsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
