    import { readFile, writeFile } from 'fs/promises';

    const DB_PATH = './db.json';

    export const readDB = async () => {
    const data = await readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
    };

    export const writeDB = async (data) => {
    await writeFile(DB_PATH, JSON.stringify(data, null, 2));
    };
    export const getStudentById = async (id) => {
    const students = await readDB();
    return students.find(s => s.id == id);
    };