import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// File path
const file = join(__dirname, '../db.json');
const adapter = new JSONFile(file);

// ✅ Pass defaultData explicitly
const defaultData = {
  clients: [],
  users: [],
  authCodes: [],
  tokens: []
};

const db = new Low(adapter, defaultData); // 👈 this prevents the error

await db.read();
await db.write(); // ensure default structure saved

export default db;
