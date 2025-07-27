import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const adapter = new JSONFile("db.json");
const defaultData = { documents: [] };
const db = new Low(adapter, defaultData); // 🟢 Fix here too

await db.read();

export const setupDocSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-document", (docId) => {
      socket.join(docId);
      console.log(`User ${socket.id} joined document ${docId}`);
    });

    socket.on("edit-document", async ({ docId, content }) => {
      const doc = db.data.documents.find(d => d.id === docId);
      if (doc) {
        doc.content = content;
        await db.write();
        socket.to(docId).emit("document-updated", content);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
