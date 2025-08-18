import 'dotenv/config';
import crypto from 'crypto';

function required(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

const MASTER_KEY_BASE64 = required('MASTER_KEY_BASE64');
const MASTER_KEY = Buffer.from(MASTER_KEY_BASE64, 'base64');
if (MASTER_KEY.length !== 32) throw new Error('MASTER_KEY must be 32 bytes (base64)');

export const config = {
  port: Number(process.env.PORT ?? 8080),
  env: process.env.NODE_ENV ?? 'development',
  dbUrl: process.env.DATABASE_URL ?? './data/secure.db',
  masterKey: MASTER_KEY,
  jwt: {
    issuer: required('JWT_ISSUER'),
    accessTtl: required('JWT_ACCESS_TTL'),
    refreshTtl: required('JWT_REFRESH_TTL'),
    secret: required('JWT_SECRET')
  }
};
