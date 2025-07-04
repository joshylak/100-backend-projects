import express from 'express';
import {
  getAllDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination
} from '../controllers/destinationController.js';

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.post('/', addDestination);
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);

export default router;
