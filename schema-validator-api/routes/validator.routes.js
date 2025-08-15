import { Router } from 'express';
import { validateSchema } from '../controllers/validator.controller.js';

const router = Router();

router.post('/', validateSchema);

export default router;
