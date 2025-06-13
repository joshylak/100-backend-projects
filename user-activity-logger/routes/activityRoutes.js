import express from 'express';
import {
  logActivity,
  getAllActivities,
  getActivitiesByUser,
} from '../controllers/activityController.js';

const router = express.Router();

router.post('/', logActivity);
router.get('/', getAllActivities);
router.get('/:userId', getActivitiesByUser);

export default router;