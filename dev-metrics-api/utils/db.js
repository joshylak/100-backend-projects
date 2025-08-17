import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// Setup database
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { metrics: [] });

// Ensure DB is ready before use
await db.read();
db.data ||= { metrics: [] };
await db.write();

export default db;
