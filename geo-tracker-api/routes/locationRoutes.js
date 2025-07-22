import express from 'express';
import { saveLocation, getLocations } from '../controllers/locationController.js';

const router = express.Router();

router.post('/', saveLocation);         // POST /api/locations
router.get('/', getLocations);          // GET /api/locations?userId=123

export default router;
