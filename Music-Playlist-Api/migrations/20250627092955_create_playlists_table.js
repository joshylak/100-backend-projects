    export async function up(knex) {
    return knex.schema.createTable('playlists', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.timestamps(true, true);
    });
    }

    export async function down(knex) {
    return knex.schema.dropTableIfExists('playlists');
    }
