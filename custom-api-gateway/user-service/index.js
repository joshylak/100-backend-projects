import express from 'express';

const app = express();
const PORT = 4001;

const users = [
  { id: 1, name: 'Alice Doe', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Johnson', email: 'charlie@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`👤 User Service running at http://localhost:${PORT}`);
});
