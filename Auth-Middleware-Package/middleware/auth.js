import { verifyToken } from '../utils/jwt.js';

export function authenticate(req, res, next) {
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Authorization header missing or malformed' });
}

const token = authHeader.split(' ')[1];
const decoded = verifyToken(token);

if (!decoded) {
return res.status(401).json({ message: 'Invalid or expired token' });
}

req.user = decoded;
next();
}