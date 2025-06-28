    export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.uuid('borrowed_book_id').references('id').inTable('books').nullable();
    });
    }

    export function down(knex) {
    return knex.schema.dropTable('users');
    }
