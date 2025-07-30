import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('./db/db.json');
const db = new Low(adapter);

await db.read();
db.data ||= { users: [] };

export default db;
