    import express from 'express';
    import { calories } from '../data/calories.js';

    const router = express.Router();

    router.get('/', (req, res) => res.json(calories));

    router.get('/:id', (req, res) => {
    const entry = calories.find(c => c.id === parseInt(req.params.id));
    if (!entry) return res.status(404).json({ message: 'Calorie entry not found' });
    res.json(entry);
    });

    router.post('/', (req, res) => {
    const { food, amount, date } = req.body;
    const newEntry = {
        id: calories.length + 1,
        food,
        amount,
        date
    };
    calories.push(newEntry);
    res.status(201).json(newEntry);
    });

    router.put('/:id', (req, res) => {
    const entry = calories.find(c => c.id === parseInt(req.params.id));
    if (!entry) return res.status(404).json({ message: 'Calorie entry not found' });

    const { food, amount, date } = req.body;
    entry.food = food ?? entry.food;
    entry.amount = amount ?? entry.amount;
    entry.date = date ?? entry.date;

    res.json(entry);
    });

    router.delete('/:id', (req, res) => {
    const index = calories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Calorie entry not found' });
    calories.splice(index, 1);
    res.json({ message: 'Calorie entry deleted' });
    });

    export default router;
