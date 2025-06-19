import jwt from 'jsonwebtoken';

const SECRET = 'SSO_SECRET_KEY';

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    try {
    return jwt.verify(token, SECRET);
    } catch (e) {
    return null;
    }
};
