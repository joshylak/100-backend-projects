/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary(); // Auto-incrementing integer ID
        table.string('title').notNullable();
        table.boolean('completed').defaultTo(false);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todos').del()
        .then(() => {
            // Inserts seed entries
            return knex('todos').insert([
                { title: 'Buy milk', completed: false },
                { title: 'Walk the dog', completed: true },
                { title: 'Read a book', completed: false }
            ]);
        });
};
