    import express from 'express';
    import User from '../models/User.js';

    const router = express.Router();

    // Create a new user
    router.post('/', async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.query().insert({ username });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Username may already exist.' });
    }
    });

    // Get all users
    router.get('/', async (req, res) => {
    const users = await User.query();
    res.json(users);
    });

    // Get user with playlists
    router.get('/:id', async (req, res) => {
    const user = await User.query()
        .findById(req.params.id)
        .withGraphFetched('playlists');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
    });

    export default router;
