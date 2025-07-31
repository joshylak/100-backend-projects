import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import db from '../db/lowdb.js';

// POST /api/videos/upload
export const uploadVideo = async (req, res) => {
  try {
    await db.read();

    // Ensure db.data and db.data.videos exist
    if (!db.data) db.data = {};
    if (!db.data.videos) db.data.videos = [];

    const { title } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No video uploaded' });
    }

    const video = {
      id: nanoid(),
      title,
      filename: file.filename,
    };

    db.data.videos.push(video);
    await db.write();

    res.status(201).json(video);
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Server error during upload' });
  }
};

// GET /api/videos
export const getAllVideos = async (req, res) => {
  try {
    await db.read();
    if (!db.data || !db.data.videos) {
      return res.json([]);
    }
    res.json(db.data.videos);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ error: 'Server error during fetch' });
  }
};

// GET /api/videos/stream/:filename
export const streamVideo = (req, res) => {
  const { filename } = req.params;
  const videoPath = path.join('videos', filename);

  if (!fs.existsSync(videoPath)) {
    return res.status(404).json({ error: 'Video file not found' });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-");
    const start = parseInt(startStr, 10);
    const end = endStr ? parseInt(endStr, 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const stream = fs.createReadStream(videoPath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    });

    stream.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(videoPath).pipe(res);
  }
};
