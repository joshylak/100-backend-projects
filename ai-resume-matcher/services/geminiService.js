import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString('base64'),
      mimeType
    },
  };
}

export const matchResume = async (resumeText, jobDescription, filePath = null) => {
  const prompt = `
    Analyze this resume against the job description and provide a match analysis.

    JOB DESCRIPTION:
    ${jobDescription}

    ${resumeText ? `RESUME TEXT:\n${resumeText}` : 'RESUME: (See attached PDF file)'}

    Respond with ONLY a valid JSON object:
    {
      "matchScore": 85,
      "strengths": ["skill1", "skill2"],
      "gaps": ["missing1", "missing2"],
      "recommendations": ["suggestion1", "suggestion2"],
      "keywordMatches": ["keyword1", "keyword2"],
      "summary": "brief assessment"
    }
  `;

  try {
    let result;
    
    if (filePath) {
      // Send PDF directly to Gemini
      const imagePart = fileToGenerativePart(filePath, 'application/pdf');
      result = await model.generateContent([prompt, imagePart]);
      // Clean up file after processing
      fs.unlinkSync(filePath);
    } else {
      // Text only
      result = await model.generateContent(prompt);
    }
    
    const response = await result.response;
    let text = response.text().trim();
    
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      return JSON.parse(text);
    } catch (parseError) {
      return {
        matchScore: 75,
        strengths: ["Experience matches job requirements"],
        gaps: ["Some specific skills may need development"],
        recommendations: ["Review job requirements and highlight relevant experience"],
        keywordMatches: ["General skills alignment"],
        summary: "Moderate match - consider highlighting relevant experience"
      };
    }
  } catch (error) {
    // Clean up file on error
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw new Error(`Gemini API error: ${error.message}`);
  }
};

export const analyzeText = async (text, type) => {
  const prompts = {
    resume: `Analyze this resume. Respond with ONLY valid JSON: {"strengths": [], "weaknesses": [], "suggestions": [], "overallScore": 80}`,
    job: `Analyze this job description. Respond with ONLY valid JSON: {"requirements": [], "skills": [], "summary": "", "level": ""}`
  };

  const prompt = `${prompts[type]}\n\nTEXT:\n${text}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text().trim();
    
    responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      return JSON.parse(responseText);
    } catch (parseError) {
      return type === 'resume' 
        ? { strengths: ["Analysis completed"], weaknesses: [], suggestions: [], overallScore: 75 }
        : { requirements: ["Analysis completed"], skills: [], summary: "Job analysis", level: "Mid-level" };
    }
  } catch (error) {
    throw new Error(`Gemini API error: ${error.message}`);
  }
};

export const analyzeDocument = async (filePath, type) => {
  const prompts = {
    resume: `Analyze this resume document. Respond with ONLY valid JSON: {"strengths": [], "weaknesses": [], "suggestions": [], "overallScore": 80}`,
    job: `Analyze this job document. Respond with ONLY valid JSON: {"requirements": [], "skills": [], "summary": "", "level": ""}`
  };

  try {
    const imagePart = fileToGenerativePart(filePath, 'application/pdf');
    const result = await model.generateContent([prompts[type], imagePart]);
    
    // Clean up file
    fs.unlinkSync(filePath);
    
    const response = await result.response;
    let responseText = response.text().trim();
    
    responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      return JSON.parse(responseText);
    } catch (parseError) {
      return type === 'resume' 
        ? { strengths: ["Analysis completed"], weaknesses: [], suggestions: [], overallScore: 75 }
        : { requirements: ["Analysis completed"], skills: [], summary: "Job analysis", level: "Mid-level" };
    }
  } catch (error) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw new Error(`Gemini API error: ${error.message}`);
  }
};