import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { tenants } from '../utils/memory.js';

export const signup = async (req, res) => {
  const { tenantName, name, email, password } = req.body;

  if (!tenants[tenantName]) {
    tenants[tenantName] = { users: [] };
  }

  const existingUser = tenants[tenantName].users.find(u => u.email === email);
  if (existingUser) return res.status(409).json({ error: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  tenants[tenantName].users.push({ name, email, password: hashedPassword });

  res.status(201).json({ message: 'User signed up successfully' });
};

export const login = async (req, res) => {
  const { tenantName, email, password } = req.body;

  const tenant = tenants[tenantName];
  if (!tenant) return res.status(404).json({ error: 'Tenant not found' });

  const user = tenant.users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });

  const token = jwt.sign({ email, tenantName }, 'secret', { expiresIn: '1h' });
  res.json({ token });
};
