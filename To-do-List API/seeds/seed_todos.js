/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todos').del()
        .then(() => {
            // Inserts seed entries
            return knex('todos').insert([
                { title: 'Buy groceries', completed: false },
                { title: 'Walk the dog', completed: true },
                { title: 'Read a book', completed: false }
            ]);
        });
};
