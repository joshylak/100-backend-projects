import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import tokenRoutes from './routes/token.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(tokenRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`OAuth2 Provider running at http://localhost:${PORT}`));
