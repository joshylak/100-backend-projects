import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

// Get all threads
router.get("/", (req, res) => {
  const threads = req.db.data.threads || [];
  res.json(threads.filter(t => !t.deleted));
});

// Create a new thread
router.post("/", async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // ✅ Ensure threads array exists
  req.db.data.threads ||= [];

  const thread = {
    id: nanoid(),
    title,
    content,
    author,
    createdAt: Date.now(),
    deleted: false
  };

  req.db.data.threads.push(thread);
  await req.db.write();

  res.status(201).json(thread);
});

export default router;
