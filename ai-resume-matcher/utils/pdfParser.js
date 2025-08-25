import fs from 'fs';

export const extractTextFromPDF = async (filePath) => {
  try {
    // Simple placeholder - in production you'd use a proper PDF parser
    // For now, just clean up the file and return a message
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    return "PDF parsing temporarily disabled. Please copy and paste your resume text in the text area below.";
  } catch (error) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw new Error(`File processing failed: ${error.message}`);
  }
};