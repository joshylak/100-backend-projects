    export async function up(knex) {
    return knex.schema.createTable('songs', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('artist').notNullable();
        table.timestamps(true, true);
    });
    }

    export async function down(knex) {
    return knex.schema.dropTableIfExists('songs');
    }
