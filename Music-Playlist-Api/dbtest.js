    import db from './db/db.js';

    (async () => {
    try {
        await db.raw('SELECT 1+1 AS result');
        console.log('✅ Connected to Supabase PostgreSQL');
    } catch (err) {
        console.error('❌ DB connection failed:', err.message);
    }
    })();
