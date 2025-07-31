import express from 'express';
import cors from 'cors';
import videoRoutes from './routes/videoRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`🎥 Server running at http://localhost:${PORT}`);
});
