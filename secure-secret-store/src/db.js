import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.resolve(__dirname, '..', 'data');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

export const db = new Database(config.dbUrl);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS secrets (
  id TEXT PRIMARY KEY,
  owner_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- logical name / grouping
  version INTEGER NOT NULL, -- version per name
  ciphertext BLOB NOT NULL,
  iv BLOB NOT NULL,
  auth_tag BLOB NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT,
  one_time INTEGER NOT NULL DEFAULT 0,
  read_once_used INTEGER NOT NULL DEFAULT 0,
  metadata TEXT,
  UNIQUE(owner_id, name, version)
);

CREATE INDEX IF NOT EXISTS idx_secrets_owner_name ON secrets(owner_id, name);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  action TEXT NOT NULL,
  subject_id TEXT,
  ip TEXT,
  user_agent TEXT,
  created_at TEXT NOT NULL,
  details TEXT
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
  token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
`);

export function reset() {
  db.exec(`DROP TABLE IF EXISTS refresh_tokens; DROP TABLE IF EXISTS audit_logs; DROP TABLE IF EXISTS secrets; DROP TABLE IF EXISTS users;`);
}
