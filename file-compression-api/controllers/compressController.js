import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const compressFile = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });

  const inputPath = req.file.path;
  const outputDir = 'compressed';
  const outputPath = path.join(outputDir, `${req.file.filename}.gz`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);

  output.on('finish', () => {
    res.download(outputPath, `${req.file.originalname}.gz`, (err) => {
      if (err) return res.status(500).json({ error: 'Download failed' });
      fs.unlinkSync(inputPath); // delete original file
    });
  });
};
