import { createPostmanCollection } from "../services/generator.service.js";

export const generateCollection = (req, res) => {
  try {
    const { name, requests } = req.body;

    if (!name || !requests) {
      return res.status(400).json({ message: "Name and requests are required" });
    }

    const collection = createPostmanCollection(name, requests);

    res.setHeader("Content-Disposition", "attachment; filename=collection.json");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(collection);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
