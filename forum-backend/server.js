import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import threadsRouter from "./routes/threads.js";
import repliesRouter from "./routes/replies.js";

const app = express();
app.use(express.json());

const adapter = new JSONFile("db.json");

// ✅ lowdb v5+ requires default data as second argument
const defaultData = { threads: [], replies: [] };
const db = new Low(adapter, defaultData);

await db.read();

// ✅ fallback if db.data is undefined
if (!db.data) {
  db.data = defaultData;
  await db.write();
}

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use("/threads", threadsRouter);
app.use("/replies", repliesRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
