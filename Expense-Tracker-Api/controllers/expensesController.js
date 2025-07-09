    import { v4 as uuidv4 } from 'uuid';
    import fs from 'fs-extra';

    const dbPath = './db/expenses.json';

    export const getAllExpenses = async (req, res) => {
    const data = await fs.readJson(dbPath);
    res.json(data);
    };

    export const getExpenseById = async (req, res) => {
    const data = await fs.readJson(dbPath);
    const expense = data.find(e => e.id === req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
    };

    export const createExpense = async (req, res) => {
    const { title, amount, category } = req.body;
    if (!title || !amount) return res.status(400).json({ message: 'Missing fields' });

    const newExpense = {
        id: uuidv4(),
        title,
        amount,
        category: category || 'Uncategorized',
        createdAt: new Date().toISOString()
    };

    const data = await fs.readJson(dbPath);
    data.push(newExpense);
    await fs.writeJson(dbPath, data);

    res.status(201).json(newExpense);
    };

    export const updateExpense = async (req, res) => {
    const { title, amount, category } = req.body;
    const data = await fs.readJson(dbPath);
    const index = data.findIndex(e => e.id === req.params.id);

    if (index === -1) return res.status(404).json({ message: 'Expense not found' });

    data[index] = { ...data[index], title, amount, category };
    await fs.writeJson(dbPath, data);
    res.json(data[index]);
    };

    export const deleteExpense = async (req, res) => {
    const data = await fs.readJson(dbPath);
    const filtered = data.filter(e => e.id !== req.params.id);

    if (data.length === filtered.length) return res.status(404).json({ message: 'Expense not found' });

    await fs.writeJson(dbPath, filtered);
    res.json({ message: 'Deleted successfully' });
    };
