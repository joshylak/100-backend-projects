import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

// Get replies for a thread
router.get("/:threadId", (req, res) => {
  const replies = req.db.data.replies || [];
  const result = replies.filter(r => r.threadId === req.params.threadId && !r.deleted);
  res.json(result);
});

// Post a reply
router.post("/", async (req, res) => {
  const { threadId, content, author } = req.body;

  if (!threadId || !content || !author) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // ✅ Ensure replies array exists
  req.db.data.replies ||= [];

  const reply = {
    id: nanoid(),
    threadId,
    content,
    author,
    createdAt: Date.now(),
    deleted: false
  };

  req.db.data.replies.push(reply);
  await req.db.write();

  res.status(201).json(reply);
});

export default router;
