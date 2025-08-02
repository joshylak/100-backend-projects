import { db } from '../db/db.js';
import { nanoid } from 'nanoid';

export const createContent = async (req, res) => {
    const { title, body, type } = req.body;
    const slug = title.toLowerCase().replace(/\s+/g, '-') + '-' + nanoid(5);
    const image = req.file?.path;

    await db.read();
    db.data.contents.push({ id: Date.now().toString(), title, body, type, slug, image });
    await db.write();

    res.status(201).json({ msg: 'Content created' });
};

export const getAllContent = async (req, res) => {
    await db.read();
    res.json(db.data.contents);
};

export const getSingleContent = async (req, res) => {
    await db.read();
    const item = db.data.contents.find(c => c.slug === req.params.slug);
    if (!item) return res.status(404).json({ msg: 'Not found' });
    res.json(item);
};

export const updateContent = async (req, res) => {
    const { title, body, type } = req.body;
    await db.read();
    const index = db.data.contents.findIndex(c => c.slug === req.params.slug);
    if (index === -1) return res.status(404).json({ msg: 'Not found' });

const image = req.file?.path || db.data.contents[index].image;
    db.data.contents[index] = { ...db.data.contents[index], title, body, type, image };
    await db.write();

    res.json({ msg: 'Content updated' });
};

export const deleteContent = async (req, res) => {
    await db.read();
    db.data.contents = db.data.contents.filter(c => c.slug !== req.params.slug);
    await db.write();
    res.json({ msg: 'Content deleted' });
};
