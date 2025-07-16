import express from 'express';
import { getUserActivity } from '../controllers/githubController.js';

const router = express.Router();

router.get('/activity/:username', getUserActivity);

export default router;
