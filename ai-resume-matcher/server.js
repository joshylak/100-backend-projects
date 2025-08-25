import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { matchResume } from './services/geminiService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3103;
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static('public'));

// Direct route - no separate router
app.post('/api/match', upload.single('resume'), async (req, res) => {
  try {
    console.log('POST /api/match received');
    const { jobDescription, resumeText } = req.body;
    
    if (!jobDescription) {
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
      return res.status(400).json({ error: 'Resume file or text is required' });
    }
    
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

// Add OPTIONS for CORS preflight
app.options('/api/match', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});