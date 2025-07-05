    import express from "express";
    import fs from "fs-extra";
    import { v4 as uuidv4 } from "uuid";

    const router = express.Router();
    const dbFile = "db.json";

    // Utility: Read DB
    const readDB = async () => {
    const data = await fs.readJson(dbFile);
    return data;
    };

    // Utility: Write DB
    const writeDB = async (data) => {
    await fs.writeJson(dbFile, data, { spaces: 2 });
    };

    // GET all learning paths
    router.get("/", async (req, res) => {
    const db = await readDB();
    res.json(db.paths);
    });

    // GET a specific path by ID
    router.get("/:id", async (req, res) => {
    const db = await readDB();
    const path = db.paths.find(p => p.id === req.params.id);
    if (!path) return res.status(404).json({ error: "Path not found" });
    res.json(path);
    });

    // POST: Create a new learning path
    router.post("/", async (req, res) => {
    const { title, description } = req.body;
    const newPath = {
        id: uuidv4(),
        title,
        description,
        topics: []
    };
    const db = await readDB();
    db.paths.push(newPath);
    await writeDB(db);
    res.status(201).json(newPath);
    });

    // POST: Add topic to path
    router.post("/:id/topics", async (req, res) => {
    const { title } = req.body;
    const db = await readDB();
    const path = db.paths.find(p => p.id === req.params.id);
    if (!path) return res.status(404).json({ error: "Path not found" });

    const topic = {
        id: uuidv4(),
        title,
        completed: false
    };

    path.topics.push(topic);
    await writeDB(db);
    res.status(201).json(topic);
    });

    // PATCH: Mark topic as completed
    router.patch("/:pathId/topics/:topicId", async (req, res) => {
    const db = await readDB();
    const path = db.paths.find(p => p.id === req.params.pathId);
    if (!path) return res.status(404).json({ error: "Path not found" });

    const topic = path.topics.find(t => t.id === req.params.topicId);
    if (!topic) return res.status(404).json({ error: "Topic not found" });

    topic.completed = true;
    await writeDB(db);
    res.json(topic);
    });

    // DELETE a path
    router.delete("/:id", async (req, res) => {
    const db = await readDB();
    db.paths = db.paths.filter(p => p.id !== req.params.id);
    await writeDB(db);
    res.json({ message: "Path deleted" });
    });

    export default router;
