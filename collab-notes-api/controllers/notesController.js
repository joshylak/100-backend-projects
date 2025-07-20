    import { readData, writeData } from '../utils/fileHandler.js';
    import { v4 as uuid } from 'uuid';

    export const getAllNotes = async (req, res) => {
    const { notes } = await readData();
    res.json(notes);
    };

    export const createNote = async (req, res) => {
    const { title, content, owner } = req.body;
    if (!title || !owner) return res.status(400).json({ error: 'Title and Owner required' });

    const newNote = {
        id: uuid(),
        title,
        content: content || '',
        owner,
        collaborators: []
    };

    const data = await readData();
    data.notes.push(newNote);
    await writeData(data);

    res.status(201).json(newNote);
    };

    export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { user, title, content } = req.body;

    const data = await readData();
    const note = data.notes.find(n => n.id === id);

    if (!note) return res.status(404).json({ error: 'Note not found' });
    if (note.owner !== user && !note.collaborators.includes(user)) {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    note.title = title || note.title;
    note.content = content || note.content;

    await writeData(data);
    res.json(note);
    };

    export const deleteNote = async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;

    const data = await readData();
    const noteIndex = data.notes.findIndex(n => n.id === id);

    if (noteIndex === -1) return res.status(404).json({ error: 'Note not found' });

    const note = data.notes[noteIndex];
    if (note.owner !== user) return res.status(403).json({ error: 'Only owner can delete' });

    data.notes.splice(noteIndex, 1);
    await writeData(data);

    res.json({ message: 'Note deleted' });
    };

    export const shareNote = async (req, res) => {
    const { id } = req.params;
    const { owner, collaborator } = req.body;

    const data = await readData();
    const note = data.notes.find(n => n.id === id);

    if (!note) return res.status(404).json({ error: 'Note not found' });
    if (note.owner !== owner) return res.status(403).json({ error: 'Only owner can share' });

    if (!note.collaborators.includes(collaborator)) {
        note.collaborators.push(collaborator);
        await writeData(data);
    }

    res.json(note);
    };
