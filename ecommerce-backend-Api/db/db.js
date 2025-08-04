import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Create adapter
const adapter = new JSONFile('db/db.json')

// ✅ Pass defaultData as second argument
const db = new Low(adapter, { products: [], cart: [], orders: [] })

await db.read()
// No need to set db.data manually anymore — defaultData handles it

export default db
