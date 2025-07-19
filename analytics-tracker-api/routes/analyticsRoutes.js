import express from 'express';
import { trackEvent, getAllEvents } from '../controllers/analyticsController.js';

const router = express.Router();

router.post('/track', trackEvent);
router.get('/events', getAllEvents);

export default router;
