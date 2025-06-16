import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'You are authenticated', user: req.user });
});

export default router;
