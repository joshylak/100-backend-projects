import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('./db.json');
const defaultData = { videos: [] };
const db = new Low(adapter, defaultData);

await db.read();
db.data ||= defaultData;
await db.write();

export default db;
