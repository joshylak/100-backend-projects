import express from 'express';
import {
    getAllNotifications,
    sendNotification,
    markAsRead
} from '../controllers/notificationsController.js';

const router = express.Router();

router.get('/', getAllNotifications);
router.post('/', sendNotification);
router.patch('/:id/read', markAsRead);

export default router;
