require('dotenv').config();

console.log('Database URL:', process.env.SUPABASE_URL);

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.SUPABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
