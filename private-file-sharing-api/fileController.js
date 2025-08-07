import path from 'path';
import multer from 'multer';
import { generateToken, validateToken } from './token.js';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const upload = multer({ dest: uploadsDir });

export const uploadFile = upload.single('file');

export function handleUpload(req, res) {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const filePath = req.file.path;
  const token = generateToken(filePath, 10); // 10-minute token

  // Build the download link using the request's protocol and host
  const protocol = req.protocol;
  const host = req.get('host');
  const downloadLink = `${protocol}://${host}/download/${token}`;

  res.json({ message: 'File uploaded', downloadLink });
}

export function handleDownload(req, res) {
  const { token } = req.params;
  const filePath = validateToken(token);
  if (!filePath) return res.status(403).json({ error: 'Invalid or expired token' });
  res.download(filePath, err => {
    if (err) res.status(500).json({ error: 'File download failed' });
  });
}
