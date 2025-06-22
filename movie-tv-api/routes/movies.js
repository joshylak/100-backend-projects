    import express from 'express';
    import { movies } from '../data/movies.js';

    const router = express.Router();

    // Get all movies
    router.get('/', (req, res) => res.json(movies));

    // Get one movie
    router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id == req.params.id);
    if (!movie) return res.status(404).json({ message: 'Not found' });
    res.json(movie);
    });

    // Add a movie
    router.post('/', (req, res) => {
    const newMovie = { id: movies.length + 1, ...req.body };
    movies.push(newMovie);
    res.status(201).json(newMovie);
    });

    // Update
    router.put('/:id', (req, res) => {
    const index = movies.findIndex(m => m.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Not found' });
    movies[index] = { ...movies[index], ...req.body };
    res.json(movies[index]);
    });

    // Delete
    router.delete('/:id', (req, res) => {
    const index = movies.findIndex(m => m.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Not found' });
    movies.splice(index, 1);
    res.json({ message: 'Deleted' });
    });

    export default router;
    