    import express from 'express';
    import { store } from '../data/store.js';

    const router = express.Router();

    // Create User
    router.post('/users', async (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });

    const user = { id: Date.now().toString(), username };
    store.users.push(user);
    res.status(201).json(user);
    });

    // Create Habit
    router.post('/habits', async (req, res) => {
    const { userId, title } = req.body;
    if (!userId || !title) return res.status(400).json({ error: 'userId and title required' });

    const habit = { id: Date.now().toString(), userId, title };
    store.habits.push(habit);
    res.status(201).json(habit);
    });

    // Mark Habit as Complete
    router.post('/habits/:id/complete', async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    if (!date) return res.status(400).json({ error: 'date is required' });

    const habit = store.habits.find(h => h.id === id);
    if (!habit) return res.status(404).json({ error: 'Habit not found' });

    store.habitLogs.push({ habitId: id, date });
    res.json({ message: 'Habit marked as completed' });
    });

    // Get User Habits
    router.get('/users/:userId/habits', async (req, res) => {
    const { userId } = req.params;
    const habits = store.habits.filter(h => h.userId === userId);
    res.json(habits);
    });

    // Get Logs for a Habit
    router.get('/habits/:id/logs', async (req, res) => {
    const { id } = req.params;
    const logs = store.habitLogs.filter(log => log.habitId === id);
    res.json(logs);
    });

    export default router;
