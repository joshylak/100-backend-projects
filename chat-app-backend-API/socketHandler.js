    export default function handleSocketConnection(io, socket) {
    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`${socket.id} joined room ${room}`);
        socket.to(room).emit('userJoined', `${socket.id} joined the room`);
    });

    socket.on('sendMessage', ({ room, message, username }) => {
        const payload = {
        username,
        message,
        time: new Date().toLocaleTimeString()
        };
        io.to(room).emit('receiveMessage', payload);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
    }
