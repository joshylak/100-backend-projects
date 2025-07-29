import express from 'express';
import bcrypt from 'bcrypt';
import db from '../utils/db.js';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.js';

const router = express.Router();

router.post('/token', express.urlencoded({ extended: true }), async (req, res) => {
  const { code, client_id, client_secret, grant_type } = req.body;
  if (grant_type !== 'authorization_code') return res.status(400).send({ error: 'unsupported_grant_type' });

  await db.read();
  const client = db.data.clients.find(c => c.client_id === client_id);
  if (!client || !(await bcrypt.compare(client_secret, client.client_secret))) {
    return res.status(401).send({ error: 'invalid_client' });
  }

  const authCode = db.data.authCodes.find(c => c.code === code && c.client_id === client_id);
  if (!authCode) return res.status(400).send({ error: 'invalid_grant' });

  // Clean up the code
  db.data.authCodes = db.data.authCodes.filter(c => c.code !== code);

  const access_token = generateAccessToken(authCode.user_id);
  const refresh_token = generateRefreshToken(authCode.user_id);
  db.data.tokens.push({ access_token, refresh_token, user_id: authCode.user_id });

  await db.write();

  res.send({ access_token, token_type: 'Bearer', expires_in: 900, refresh_token });
});

export default router;
