import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token' });

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
} catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
    }
};
