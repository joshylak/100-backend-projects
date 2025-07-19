import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../db/db.json');

export const trackEvent = async (req, res) => {
    const { type, userId, metadata } = req.body;

if (!type) return res.status(400).json({ error: 'Event type is required' });

const newEvent = {
    type,
    userId: userId || null,
    metadata: metadata || {},
    timestamp: new Date().toISOString()
    };

const data = JSON.parse(await fs.readFile(dbPath, 'utf8'));
    data.events.push(newEvent);
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));

res.status(201).json({ message: 'Event tracked' });
};

export const getAllEvents = async (_req, res) => {
    const data = JSON.parse(await fs.readFile(dbPath, 'utf8'));
    const sorted = data.events.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.json(sorted);
};
