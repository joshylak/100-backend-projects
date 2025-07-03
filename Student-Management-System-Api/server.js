    import express from 'express';
    import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
    } from './studentController.js';

    const app = express();
    const PORT = 3000;

    app.use(express.json());

    app.get('/students', getAllStudents);
    app.get('/students/:id', getStudentById);
    app.post('/students', createStudent);
    app.put('/students/:id', updateStudent);
    app.delete('/students/:id', deleteStudent);

    app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
