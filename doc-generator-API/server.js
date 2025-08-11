import express from 'express';
import { generateDocs } from './generateDocs.js';
import fs from 'fs-extra';

const app = express();
app.use(express.json());

// Generate docs on demand
app.post('/generate-docs', async (req, res) => {
  try {
    const { sourcePath, outputFile } = req.body;
    const markdown = await generateDocs(sourcePath, outputFile);
    res.json({ message: 'Docs generated successfully', markdown });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get generated docs
app.get('/docs', async (req, res) => {
  try {
    const file = './API_DOCS.md';
    if (!(await fs.pathExists(file))) {
      return res.status(404).json({ error: 'No docs found' });
    }
    const content = await fs.readFile(file, 'utf-8');
    res.type('text/markdown').send(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
