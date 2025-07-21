import express from 'express';
import compressRoutes from './routes/compressRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/compress', compressRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
