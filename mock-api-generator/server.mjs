import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { generateRoutesFromSchemas } from './generator.mjs';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Dynamically load schemas and register routes
await generateRoutesFromSchemas(app, './schemas');

app.get('/', (req, res) => {
  res.json({ message: 'Mock API Generator running', docs: '/docs (not implemented)' });
});

app.listen(PORT, () => {
  console.log(`Mock API Generator listening on http://localhost:${PORT}`);
});
