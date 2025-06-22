import express from 'express';
import { shows } from '../data/shows.js';

const router = express.Router();

router.get('/', (req, res) => res.json(shows));

router.get('/:id', (req, res) => {
  const show = shows.find(s => s.id == req.params.id);
  if (!show) return res.status(404).json({ message: 'Not found' });
  res.json(show);
});

router.post('/', (req, res) => {
  const newShow = { id: shows.length + 1, ...req.body };
  shows.push(newShow);
  res.status(201).json(newShow);
});

router.put('/:id', (req, res) => {
  const index = shows.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  shows[index] = { ...shows[index], ...req.body };
  res.json(shows[index]);
});

router.delete('/:id', (req, res) => {
  const index = shows.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  shows.splice(index, 1);
  res.json({ message: 'Deleted' });
});

export default router;
