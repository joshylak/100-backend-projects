    import { readDB, writeDB } from './utils.js';

    export const getAllStudents = async (req, res) => {
    const students = await readDB();
    res.json(students);
    };

    export const getStudentById = async (req, res) => {
    const students = await readDB();
    const student = students.find(s => s.id == req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
    };

    export const createStudent = async (req, res) => {
    const students = await readDB();
    const newStudent = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    };
    students.push(newStudent);
    await writeDB(students);
    res.status(201).json(newStudent);
    };

    export const updateStudent = async (req, res) => {
    const students = await readDB();
    const index = students.findIndex(s => s.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Student not found' });

    students[index] = { ...students[index], ...req.body };
    await writeDB(students);
    res.json(students[index]);
    };

    export const deleteStudent = async (req, res) => {
    let students = await readDB();
    const index = students.findIndex(s => s.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Student not found' });

    const deleted = students.splice(index, 1);
    await writeDB(students);
    res.json({ message: 'Deleted', student: deleted[0] });
    };
