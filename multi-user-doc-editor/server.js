import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import docRoutes from "./routes/documents.js";
import { setupDocSocket } from "./sockets/docSocket.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
app.use("/api/documents", docRoutes);
app.use(express.static("public"));

setupDocSocket(io);

const PORT = 3000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
