import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';

export const register = async (req, res) => {
    const { email, password } = req.body;
    await db.read();
    const exists = db.data.users.find(u => u.email === email);
    if (exists) return res.status(400).json({ msg: 'User exists' });

const hashed = await bcrypt.hash(password, 10);
    db.data.users.push({ id: Date.now().toString(), email, password: hashed });
    await db.write();
    res.json({ msg: 'User registered' });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    await db.read();
    const user = db.data.users.find(u => u.email === email);
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
};
