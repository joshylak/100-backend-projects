import express from 'express';
import { uploadFile, handleUpload, handleDownload } from './fileController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.post('/upload', uploadFile, handleUpload);
app.get('/download/:token', handleDownload);

app.listen(PORT, () => {
  console.log(`Private File Sharing API running on http://localhost:${PORT}`);
});
