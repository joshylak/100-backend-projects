import express from 'express';
import blogRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
