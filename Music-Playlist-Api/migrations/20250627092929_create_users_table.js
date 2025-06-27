    export async function up(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.timestamps(true, true);
    });
    }

    export async function down(knex) {
    return knex.schema.dropTableIfExists('users');
    }
