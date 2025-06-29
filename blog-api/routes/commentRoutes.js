import express from 'express';
import { addComment, getCommentsByBlog } from '../controllers/commentController.js';

const router = express.Router();

router.post('/', addComment);
router.get('/:blogId', getCommentsByBlog);

export default router;
