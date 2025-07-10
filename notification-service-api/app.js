import express from 'express';
import notificationsRoutes from './routes/notifications.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/notifications', notificationsRoutes);

app.get('/', (req, res) => {
res.send('Notification Service API is running...');
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
