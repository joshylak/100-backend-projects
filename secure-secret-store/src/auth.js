import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { db } from './db.js';
import { config } from './config.js';

export const Users = {
  findByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  },
  create(email, passwordHash) {
    const id = uuid();
    const now = new Date().toISOString();
    db.prepare('INSERT INTO users(id,email,password_hash,created_at) VALUES (?,?,?,?)')
      .run(id, email.toLowerCase(), passwordHash, now);
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  }
};

export async function hashPassword(pw) {
  return argon2.hash(pw, { type: argon2.argon2id, memoryCost: 19456, timeCost: 2, parallelism: 1 });
}
export async function verifyPassword(hash, pw) { return argon2.verify(hash, pw); }

export function signTokens(user) {
  const payload = { sub: user.id, email: user.email };
  const access = jwt.sign(payload, config.jwt.secret, { issuer: config.jwt.issuer, expiresIn: config.jwt.accessTtl });
  const refresh = jwt.sign({ ...payload, typ: 'refresh' }, config.jwt.secret, { issuer: config.jwt.issuer, expiresIn: config.jwt.refreshTtl });
  const now = new Date();
  const exp = new Date(now.getTime() + ms(config.jwt.refreshTtl));
  db.prepare('INSERT INTO refresh_tokens(token,user_id,expires_at,created_at) VALUES (?,?,?,?)')
    .run(refresh, user.id, exp.toISOString(), now.toISOString());
  return { access, refresh };
}

export function verifyJWT(token) {
  return jwt.verify(token, config.jwt.secret, { issuer: config.jwt.issuer });
}

export function ms(expr) {
  // tiny "1d/10m/30s" to ms parser
  const m = /^(\d+)(ms|s|m|h|d)$/.exec(expr);
  if (!m) throw new Error('Invalid TTL format');
  const n = Number(m[1]);
  const unit = m[2];
  return n * (unit === 'ms' ? 1 : unit === 's' ? 1000 : unit === 'm' ? 60000 : unit === 'h' ? 3600000 : 86400000);
}
