import express from 'express';
import { createLog, fetchLogs } from '../controllers/logController.js';

const router = express.Router();

router.post('/', createLog);
router.get('/', fetchLogs);

export default router;
