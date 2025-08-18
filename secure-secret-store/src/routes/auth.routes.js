import { Router } from 'express';
import { Users, hashPassword, verifyPassword, signTokens, ms } from '../auth.js';
import { validate } from '../middleware/validate.js';
import { SignupSchema, LoginSchema } from '../schema.js';
import { db } from '../db.js';
import { audit } from '../middleware/auth.js';

export const authRouter = Router();

authRouter.post('/signup', validate(SignupSchema), audit('signup'), async (req, res) => {
  const { email, password } = req.valid.body;
  const existing = Users.findByEmail(email);
  if (existing) return res.status(409).json({ success: false, error: 'Email in use' });
  const hash = await hashPassword(password);
  const user = Users.create(email, hash);
  const tokens = signTokens(user);
  return res.json({ success: true, user: { id: user.id, email: user.email }, ...tokens });
});

authRouter.post('/login', validate(LoginSchema), audit('login'), async (req, res) => {
  const { email, password } = req.valid.body;
  const user = Users.findByEmail(email);
  if (!user) return res.status(401).json({ success: false, error: 'Invalid credentials' });
  const ok = await verifyPassword(user.password_hash, password);
  if (!ok) return res.status(401).json({ success: false, error: 'Invalid credentials' });
  const tokens = signTokens(user);
  return res.json({ success: true, user: { id: user.id, email: user.email }, ...tokens });
});

authRouter.post('/refresh', audit('token_refresh'), async (req, res) => {
  const { refresh } = req.body || {};
  if (!refresh) return res.status(400).json({ success: false, error: 'Missing refresh token' });
  const row = db.prepare('SELECT * FROM refresh_tokens WHERE token = ?').get(refresh);
  if (!row) return res.status(401).json({ success: false, error: 'Invalid refresh token' });
  if (new Date(row.expires_at) < new Date()) {
    db.prepare('DELETE FROM refresh_tokens WHERE token = ?').run(refresh);
    return res.status(401).json({ success: false, error: 'Expired refresh token' });
  }
  try {
    const jwt = await import('jsonwebtoken');
    const payload = jwt.default.verify(refresh, process.env.JWT_SECRET, { issuer: process.env.JWT_ISSUER });
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(payload.sub);
    if (!user) return res.status(401).json({ success: false, error: 'User not found' });
    const tokens = signTokens(user);
    return res.json({ success: true, ...tokens });
  } catch {
    return res.status(401).json({ success: false, error: 'Invalid refresh token' });
  }
});

authRouter.post('/logout', audit('logout'), (req, res) => {
  const { refresh } = req.body || {};
  if (refresh) db.prepare('DELETE FROM refresh_tokens WHERE token = ?').run(refresh);
  return res.json({ success: true });
});
