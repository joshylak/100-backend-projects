    import db from '../db.js';
    import bcrypt from 'bcryptjs';
    import jwt from 'jsonwebtoken';

    export const register = async (req, res) => {
    const { email, password } = req.body;
    await db.read();
    const existing = db.data.users.find(u => u.email === email);
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    db.data.users.push({ email, password: hashed, role: 'basic', subscriptionStatus: 'inactive' });
    await db.write();

    res.status(201).json({ message: 'User registered' });
    };

    export const login = async (req, res) => {
    const { email, password } = req.body;
    await db.read();
    const user = db.data.users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    };
