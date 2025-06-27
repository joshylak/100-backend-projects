    import express from 'express';
    import Playlist from '../models/Playlist.js';

    const router = express.Router();

    // Create playlist
    router.post('/', async (req, res) => {
    const { name, user_id } = req.body;
    const playlist = await Playlist.query().insert({ name, user_id });
    res.json(playlist);
    });

    // Add song to playlist
    router.post('/:id/songs', async (req, res) => {
    const { song_id } = req.body;
    const playlistId = req.params.id;
    await Playlist.relatedQuery('songs').for(playlistId).relate(song_id);
    res.json({ message: 'Song added to playlist' });
    });

    // Get playlist with songs
    router.get('/:id', async (req, res) => {
    const playlist = await Playlist.query()
        .findById(req.params.id)
        .withGraphFetched('songs');
    res.json(playlist);
    });

    export default router;
