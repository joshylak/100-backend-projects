import express from 'express';
import upload from '../middleware/upload.js';
import { uploadVideo, getAllVideos, streamVideo } from '../controllers/videoController.js';

const router = express.Router();

router.post('/upload', upload.single('video'), uploadVideo);
router.get('/', getAllVideos);
router.get('/stream/:filename', streamVideo);

export default router;
