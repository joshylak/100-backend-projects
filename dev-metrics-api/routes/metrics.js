import express from "express";
import { logMetric, getMetrics } from "../controllers/metricsController.js";

const router = express.Router();

router.post("/", logMetric);  // log new metric
router.get("/", getMetrics);  // fetch all metrics

export default router;
