import express from 'express';

const app = express();
app.use(express.json());

// Dummy in-memory users store
let users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
];

// DELETE /delete-account
app.delete('/delete-account', (req, res) => {
    const { email } = req.body;

    if (!email) {
    return res.status(400).json({ message: 'Email is required' });
    }

    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1);

    return res.status(200).json({ message: 'Account deleted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
