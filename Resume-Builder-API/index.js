import express from 'express';
import { readDB, writeDB } from './utils.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

app.use(express.json());

// GET all resumes
app.get('/resumes', async (req, res) => {
    const db = await readDB();
    res.json(db.resumes);
});

// GET resume by ID
app.get('/resumes/:id', async (req, res) => {
    const db = await readDB();
    const resume = db.resumes.find(r => r.id === req.params.id);
    if (!resume) return res.status(404).json({ error: 'Resume not found' });
    res.json(resume);
});

// POST create resume
app.post('/resumes', async (req, res) => {
    const db = await readDB();
    const newResume = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date().toISOString()
    };
    db.resumes.push(newResume);
    await writeDB(db);
    res.status(201).json(newResume);
});

// PUT update resume
app.put('/resumes/:id', async (req, res) => {
    const db = await readDB();
    const index = db.resumes.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Resume not found' });

    db.resumes[index] = { ...db.resumes[index], ...req.body, updatedAt: new Date().toISOString() };
    await writeDB(db);
    res.json(db.resumes[index]);
});

// DELETE resume
app.delete('/resumes/:id', async (req, res) => {
    const db = await readDB();
    const newResumes = db.resumes.filter(r => r.id !== req.params.id);
    if (newResumes.length === db.resumes.length)
    return res.status(404).json({ error: 'Resume not found' });

    db.resumes = newResumes;
    await writeDB(db);
    res.json({ message: 'Resume deleted' });
});

app.listen(PORT, () => {
    console.log(`✅ Resume Builder API running on http://localhost:${PORT}`);
});
