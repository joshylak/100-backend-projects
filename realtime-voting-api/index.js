    const express = require('express');
    const http = require('http');
    const socketIo = require('socket.io');
    const cors = require('cors');
    const voteRoutes = require('./routes/voteRoutes');

    const app = express();
    const server = http.createServer(app);
    const io = socketIo(server, {
    cors: {
        origin: '*',
    },
    });

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use((req, res, next) => {
    req.io = io;
    next();
    });

    // Routes
    app.use('/api/votes', voteRoutes);

    // Socket.io connection
    io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
    });

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
