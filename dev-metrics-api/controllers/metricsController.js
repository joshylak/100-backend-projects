import db from "../utils/db.js";
import { nanoid } from "nanoid";

// Log new metric
export const logMetric = async (req, res) => {
  try {
    const { type, message, value } = req.body;

    if (!type || !value) {
      return res.status(400).json({ success: false, error: "type and value are required" });
    }

    const newMetric = {
      id: nanoid(),
      type,
      message: message || "",
      value,
      createdAt: new Date().toISOString(),
    };

    db.data.metrics.push(newMetric);
    await db.write();

    res.status(201).json({ success: true, data: newMetric });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get metrics
export const getMetrics = async (req, res) => {
  try {
    const metrics = db.data.metrics.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    res.json({ success: true, data: metrics });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
