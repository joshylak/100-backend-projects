import express from 'express';
import expensesRoutes from './routes/expenses.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/expenses', expensesRoutes);

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
