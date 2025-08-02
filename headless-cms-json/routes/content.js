import express from 'express';
import multer from 'multer';
import { protect } from '../middleware/auth.js';
import {
    createContent,
    getAllContent,
    getSingleContent,
    updateContent,
    deleteContent
} from '../controllers/contentController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllContent);
router.get('/:slug', getSingleContent);
router.post('/', protect, upload.single('image'), createContent);
router.put('/:slug', protect, upload.single('image'), updateContent);
router.delete('/:slug', protect, deleteContent);

export default router;
