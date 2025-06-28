    export function up(knex) {
    return knex.schema.createTable('books', (table) => {
        table.uuid('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.boolean('is_borrowed').defaultTo(false);
    });
    }

    export function down(knex) {
    return knex.schema.dropTable('books');
    }
