import { v4 as uuidv4 } from 'uuid';

const tokenStore = new Map(); // token => { filePath, expiresAt }

export function generateToken(filePath, expiryMinutes = 10) {
const token = uuidv4();
  const expiresAt = Date.now() + expiryMinutes * 60 * 1000;
tokenStore.set(token, { filePath, expiresAt });
    return token;
}

export function validateToken(token) {
  const data = tokenStore.get(token);
  if (!data) return null;
  if (Date.now() > data.expiresAt) {
    tokenStore.delete(token);
    return null;
  }
  // Optional: One-time use
  tokenStore.delete(token);
  return data.filePath;
}
