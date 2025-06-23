    import express from 'express';
    import { workouts } from '../data/workouts.js';

    const router = express.Router();

    router.get('/', (req, res) => res.json(workouts));

    router.get('/:id', (req, res) => {
    const workout = workouts.find(w => w.id === parseInt(req.params.id));
    if (!workout) return res.status(404).json({ message: 'Workout not found' });
    res.json(workout);
    });

    router.post('/', (req, res) => {
    const { type, duration, caloriesBurned, date } = req.body;
    const newWorkout = {
        id: workouts.length + 1,
        type,
        duration,
        caloriesBurned,
        date
    };
    workouts.push(newWorkout);
    res.status(201).json(newWorkout);
    });

    router.put('/:id', (req, res) => {
    const workout = workouts.find(w => w.id === parseInt(req.params.id));
    if (!workout) return res.status(404).json({ message: 'Workout not found' });

    const { type, duration, caloriesBurned, date } = req.body;
    workout.type = type ?? workout.type;
    workout.duration = duration ?? workout.duration;
    workout.caloriesBurned = caloriesBurned ?? workout.caloriesBurned;
    workout.date = date ?? workout.date;

    res.json(workout);
    });

    router.delete('/:id', (req, res) => {
    const index = workouts.findIndex(w => w.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Workout not found' });
    workouts.splice(index, 1);
    res.json({ message: 'Workout deleted' });
    });

    export default router;
