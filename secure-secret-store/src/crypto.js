import crypto from 'crypto';
import { config } from './config.js';

/**
 * Encrypts a Buffer or string using AES-256-GCM with the master key.
 * Returns {ciphertext, iv, tag}
 */
export function encrypt(plaintext, aad = null) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', config.masterKey, iv);
  if (aad) cipher.setAAD(Buffer.from(aad));
  const ct = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return { ciphertext: ct, iv, tag };
}

/**
 * Decrypts payload using AES-256-GCM.
 */
export function decrypt(ciphertext, iv, tag, aad = null) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', config.masterKey, iv);
  if (aad) decipher.setAAD(Buffer.from(aad));
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}
