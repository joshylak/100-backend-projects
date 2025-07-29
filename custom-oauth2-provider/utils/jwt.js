import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateAccessToken = (user_id) =>
  jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '15m' });

export const generateRefreshToken = (user_id) =>
  jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);
