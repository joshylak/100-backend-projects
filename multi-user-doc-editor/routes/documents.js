import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const router = express.Router();

const adapter = new JSONFile("db.json");
const defaultData = { documents: [] };
const db = new Low(adapter, defaultData); // 🟢 Fix: pass defaultData

await db.read();

router.get("/", (req, res) => {
  res.json(db.data.documents);
});

router.get("/:id", (req, res) => {
  const doc = db.data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: "Document not found" });
  res.json(doc);
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newDoc = {
    id: Date.now().toString(),
    title,
    content: content || ""
  };
  db.data.documents.push(newDoc);
  await db.write();
  res.status(201).json(newDoc);
});

export default router;
