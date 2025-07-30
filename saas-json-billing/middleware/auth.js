    import jwt from 'jsonwebtoken';
    import db from '../db.js';

    export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await db.read();
        const user = db.data.users.find(u => u.email === decoded.email);
        if (!user) return res.status(401).json({ error: 'Invalid user' });
        req.user = user;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
    };
