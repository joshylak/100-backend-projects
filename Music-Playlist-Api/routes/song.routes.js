    import express from 'express';
    import Song from '../models/Song.js';

    const router = express.Router();

    // Create a song
    router.post('/', async (req, res) => {
    const { title, artist } = req.body;
    try {
        const song = await Song.query().insert({ title, artist });
        res.status(201).json(song);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create song' });
    }
    });

    // Get all songs
    router.get('/', async (req, res) => {
    const songs = await Song.query();
    res.json(songs);
    });

    // Get a single song
    router.get('/:id', async (req, res) => {
    const song = await Song.query().findById(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
    });

    export default router;
