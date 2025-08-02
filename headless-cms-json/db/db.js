import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// ✅ Define default structure
const defaultData = {
  users: [],
  contents: []
}

const adapter = new JSONFile('./db/db.json')
const db = new Low(adapter, defaultData) // 👈 FIX: pass defaultData here

export default async function connectDB() {
  await db.read()
  await db.write() // ensure file is created
  console.log('✅ JSON DB Initialized')
}

export { db }
