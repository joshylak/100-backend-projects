import express from 'express';
import multer from 'multer';
import { matchResume, analyzeText, analyzeDocument } from '../services/geminiService.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/match', upload.single('resume'), async (req, res) => {
  try {
    const { jobDescription } = req.body;
    
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }

    let matchResult;
    
    if (req.file) {
      // Send PDF directly to Gemini
      matchResult = await matchResume('', jobDescription, req.file.path);
    } else if (req.body.resumeText) {
      // Use text input
      matchResult = await matchResume(req.body.resumeText, jobDescription);
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

router.post('/analyze', async (req, res) => {
  try {
    const { text, type } = req.body;
    
    if (!text || !type) {
      return res.status(400).json({ error: 'Text and type are required' });
    }

    const analysis = await analyzeText(text, type);
    
    res.json({
      success: true,
      data: analysis
    });
  } catch (error) {
    console.error('Analyze error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to analyze text',
      message: error.message 
    });
  }
});

// Debug: Log route registration
console.log('Match routes registered');

export { router as matchRoutes };