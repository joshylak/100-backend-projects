import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { db } from '../db.js';
import { encrypt, decrypt } from '../crypto.js';
import { validate } from '../middleware/validate.js';
import { CreateSecretSchema, GetSecretSchema, ListSecretsSchema } from '../schema.js';
import { audit } from '../middleware/auth.js';

export const secretsRouter = Router();

/**
 * Create a new secret version
 */
secretsRouter.post('/', validate(CreateSecretSchema), audit('secret_create'), (req, res) => {
  const { name, value, metadata, ttlSeconds, oneTime } = req.valid.body;
  const ownerId = req.user.id;
  const current = db.prepare('SELECT MAX(version) as v FROM secrets WHERE owner_id = ? AND name = ?').get(ownerId, name);
  const version = (current?.v ?? 0) + 1;

  const aad = `${ownerId}:${name}:${version}`; // bind ciphertext to identity/name/version
  const enc = encrypt(Buffer.from(value, 'utf8'), aad);
  const id = uuid();
  const now = new Date();
  const expiresAt = ttlSeconds ? new Date(now.getTime() + ttlSeconds * 1000).toISOString() : null;

  db.prepare(`INSERT INTO secrets(id,owner_id,name,version,ciphertext,iv,auth_tag,created_at,expires_at,one_time,read_once_used,metadata)
              VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
    .run(id, ownerId, name, version, enc.ciphertext, enc.iv, enc.tag, now.toISOString(), expiresAt, oneTime ? 1 : 0, 0, metadata ? JSON.stringify(metadata) : null);

  req._audit.subjectId = id;

  return res.status(201).json({
    success: true,
    id, name, version,
    created_at: now.toISOString(),
    expires_at: expiresAt
  });
});

/**
 * Get secret (latest or by version). Honors TTL and one-time semantics.
 */
secretsRouter.get('/:name', validate(GetSecretSchema), audit('secret_read'), (req, res) => {
  const ownerId = req.user.id;
  const { name } = req.valid.params;
  const version = req.valid.query.version;

  const row = version
    ? db.prepare('SELECT * FROM secrets WHERE owner_id = ? AND name = ? AND version = ?').get(ownerId, name, version)
    : db.prepare('SELECT * FROM secrets WHERE owner_id = ? AND name = ? ORDER BY version DESC LIMIT 1').get(ownerId, name);

  if (!row) return res.status(404).json({ success: false, error: 'Secret not found' });

  if (row.expires_at && new Date(row.expires_at) < new Date()) {
    return res.status(410).json({ success: false, error: 'Secret expired' });
  }
  if (row.one_time && row.read_once_used) {
    return res.status(410).json({ success: false, error: 'Secret already read (one-time)' });
  }

  try {
    const aad = `${row.owner_id}:${row.name}:${row.version}`;
    const plain = decrypt(row.ciphertext, row.iv, row.auth_tag, aad).toString('utf8');

    if (row.one_time) {
      db.prepare('UPDATE secrets SET read_once_used = 1 WHERE id = ?').run(row.id);
    }

    req._audit.subjectId = row.id;

    return res.json({
      success: true,
      name: row.name,
      version: row.version,
      value: plain,
      metadata: row.metadata ? JSON.parse(row.metadata) : null,
      created_at: row.created_at,
      expires_at: row.expires_at,
      one_time: !!row.one_time
    });
  } catch {
    return res.status(500).json({ success: false, error: 'Decryption failed' });
  }
});

/**
 * List secrets (names & latest version metadata only) or filter by name
 */
secretsRouter.get('/', validate(ListSecretsSchema), audit('secret_list'), (req, res) => {
  const ownerId = req.user.id;
  const { name } = req.valid.query;

  if (name) {
    const rows = db.prepare('SELECT name, MAX(version) as latest FROM secrets WHERE owner_id = ? AND name = ?').all(ownerId, name);
    return res.json({ success: true, items: rows });
  } else {
    const rows = db.prepare('SELECT name, MAX(version) as latest FROM secrets WHERE owner_id = ? GROUP BY name').all(ownerId);
    return res.json({ success: true, items: rows });
  }
});

/**
 * Delete a secret name (all versions) or a specific version
 */
secretsRouter.delete('/:name', audit('secret_delete'), (req, res) => {
  const ownerId = req.user.id;
  const name = req.params.name;
  const v = req.query.version ? Number(req.query.version) : null;

  let changes = 0;
  if (v) {
    const stmt = db.prepare('DELETE FROM secrets WHERE owner_id = ? AND name = ? AND version = ?');
    const result = stmt.run(ownerId, name, v);
    changes = result.changes;
  } else {
    const stmt = db.prepare('DELETE FROM secrets WHERE owner_id = ? AND name = ?');
    const result = stmt.run(ownerId, name);
    changes = result.changes;
  }
  return res.json({ success: true, deleted: changes });
});
