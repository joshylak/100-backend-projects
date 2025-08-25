# AI-Powered Resume Matcher

An intelligent resume matching system that uses Google's Gemini AI to analyze resumes against job descriptions and provide detailed matching insights.

## Features

- **Resume Analysis**: Upload PDF resumes or paste text
- **Job Matching**: Compare resumes against job descriptions
- **AI-Powered Insights**: Get match scores, strengths, gaps, and recommendations
- **Keyword Matching**: Identify relevant keywords and skills
- **Web Interface**: Simple HTML frontend for easy testing

## Tech Stack

- **Node.js** with ES7 modules
- **Express.js** for API endpoints
- **Google Gemini AI** for intelligent analysis
- **Multer** for file uploads
- **PDF-Parse** for PDF text extraction

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get Gemini API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add to `.env` file:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3000
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Access the app:**
   - Open http://localhost:3000
   - Use the web interface to test resume matching

## API Endpoints

### POST /api/match
Match a resume against a job description.

**Body:**
- `jobDescription` (string): Job description text
- `resume` (file): PDF resume file OR
- `resumeText` (string): Resume text

**Response:**
```json
{
  "success": true,
  "data": {
    "matchScore": 85,
    "strengths": ["React experience", "Node.js skills"],
    "gaps": ["AWS certification missing"],
    "recommendations": ["Consider AWS training"],
    "keywordMatches": ["JavaScript", "React", "Node.js"],
    "summary": "Strong technical match with minor gaps"
  }
}
```

### POST /api/analyze
Analyze resume or job description text.

**Body:**
- `text` (string): Text to analyze
- `type` (string): "resume" or "job"

## Usage Example

```javascript
// Match resume against job
const formData = new FormData();
formData.append('jobDescription', 'Software Engineer position...');
formData.append('resume', pdfFile);

const response = await fetch('/api/match', {
  method: 'POST',
  body: formData
});

const result = await response.json();
console.log(result.data.matchScore); // 85
```

## Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Server port (default: 3000)