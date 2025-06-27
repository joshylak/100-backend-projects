import express from 'express';
import dotenv from 'dotenv';
import './db/db.js'; // ✅ Just initialize the DB here; no need to assign to `db`

import userRoutes from './routes/user.routes.js';
import songRoutes from './routes/song.routes.js';
import playlistRoutes from './routes/playlist.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
