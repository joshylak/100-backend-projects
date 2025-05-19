const express = require("express");
const Todo = require("../models/Todo");
const db = require('../db/knex'); // Adjust the path to your Knex instance
const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.query();
  res.json(todos);
});

// Get one todo
router.get("/:id", async (req, res) => {
  const todoId = parseInt(req.params.id, 10); // Convert to integer
  if (isNaN(todoId)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const todo = await db('todos').where('id', todoId).first();
  if (todo) res.json(todo);
  else res.status(404).json({ error: "Todo not found" });
});

// Create todo
router.post("/", async (req, res) => {
  const newTodo = await Todo.query().insert(req.body);
  res.status(201).json(newTodo);
});

// Update todo
router.put("/:id", async (req, res) => {
  const updated = await Todo.query().patchAndFetchById(req.params.id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ error: "Todo not found" });
});

// Delete todo
router.delete("/:id", async (req, res) => {
  const rowsDeleted = await Todo.query().deleteById(req.params.id);
  if (rowsDeleted) res.status(204).end();
  else res.status(404).json({ error: "Todo not found" });
});

// Create a new todo
router.post('/todos', async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }

        console.log('Inserting todo:', { title, completed: false });

        const [newTodo] = await db('todos')
            .insert({ title, completed: false })
            .returning('*');

        console.log('Inserted todo:', newTodo);

        res.status(201).json(newTodo);
    } catch (error) {
        console.error('Error inserting todo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
