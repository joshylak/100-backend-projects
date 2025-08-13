import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, '../../db.json');

const adapter = new JSONFile(file);
const db = new Low(adapter, { logs: [] });

await db.read();
db.data ||= { logs: [] };
await db.write();

export default db;
