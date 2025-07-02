import express from 'express';
import { getClients, addClient, updateClient, deleteClient } from '../controllers/clientController.js';

const router = express.Router();

router.get('/', getClients);
router.post('/', addClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
