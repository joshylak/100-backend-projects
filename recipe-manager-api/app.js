import express from 'express';
import recipesRouter from './routes/recipes.js';

const app = express();
app.use(express.json());

app.use('/api/recipes', recipesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Recipe Manager API running on http://localhost:${PORT}`);
});
