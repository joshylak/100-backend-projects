import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Collaborative Notes API running at http://localhost:${PORT}`);
});
