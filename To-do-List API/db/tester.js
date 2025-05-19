const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'postgresql',
  connection: process.env.SUPABASE_URL || 'postgres://username:password@host:port/database',
});

async function testConnection() {
  try {
    await db.raw('SELECT 1+1 AS result');
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  } finally {
    db.destroy();
  }
}

testConnection();
