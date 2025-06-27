    export async function up(knex) {
    return knex.schema.createTable('playlist_songs', table => {
        table.increments('id').primary();
        table.integer('playlist_id').unsigned().references('id').inTable('playlists').onDelete('CASCADE');
        table.integer('song_id').unsigned().references('id').inTable('songs').onDelete('CASCADE');
        table.timestamps(true, true);
    });
    }

    export async function down(knex) {
    return knex.schema.dropTableIfExists('playlist_songs');
    }
