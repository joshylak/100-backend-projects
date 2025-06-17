import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'Pong 🏓', ip: req.ip });
});

export default router;