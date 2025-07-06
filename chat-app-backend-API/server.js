    import express from 'express';
    import http from 'http';
    import { Server } from 'socket.io';
    import cors from 'cors';
    import path from 'path';
    import { fileURLToPath } from 'url';
    import handleSocketConnection from './socketHandler.js';

    const app = express();
    const server = http.createServer(app);

    // Enable CORS for frontend
    const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
    });

    app.use(cors());
    app.use(express.json());

    // Get directory path for ES modules
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Serve static files from 'public' folder
    app.use(express.static(path.join(__dirname, 'public')));

    // Basic API route
    app.get('/api', (req, res) => {
    res.send('Chat App Backend API is running');
    });

    // Handle socket connection
    io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    handleSocketConnection(io, socket);
    });

    // Start server
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
