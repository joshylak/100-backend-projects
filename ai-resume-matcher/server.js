import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { matchResume } from './services/geminiService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3103;
const upload = multer({ dest: 'uploads/' });

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static('public'));

// API route with detailed logging
app.post('/api/match', upload.single('resume'), async (req, res) => {
  console.log('=== POST /api/match received ===');
  console.log('Headers:', req.headers);
  console.log('Body keys:', Object.keys(req.body));
  console.log('File:', req.file ? 'Present' : 'None');
  
  try {
    const { jobDescription, resumeText } = req.body;
    
    if (!jobDescription) {
      console.log('Missing job description');
      return res.status(400).json({ error: 'Job description is required' });
    }

    let matchResult;
    
    if (req.file) {
      console.log('Processing PDF file:', req.file.filename);
      matchResult = await matchResume('', jobDescription, req.file.path);
    } else if (resumeText) {
      console.log('Processing text input');
      matchResult = await matchResume(resumeText, jobDescription);
    } else {
      console.log('No resume data provided');
      return res.status(400).json({ error: 'Resume file or text is required' });
    }
    
    console.log('Match successful');
    res.json({
      success: true,
      data: matchResult
    });
  } catch (error) {
    console.error('Match error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to match resume',
      message: error.message 
    });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'AI Resume Matcher API is running' });
});

// Catch all undefined routes
app.all('*', (req, res) => {
  console.log(`Unhandled ${req.method} request to ${req.path}`);
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});