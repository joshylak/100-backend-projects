import express from 'express';
import upload from '../middleware/upload.js';
import { compressFile } from '../controllers/compressController.js';

const router = express.Router();

router.post('/', upload.single('file'), compressFile);

export default router;
