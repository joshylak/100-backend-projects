import express from "express";
import morgan from "morgan";
import cors from "cors";
import metricsRoutes from "./routes/metrics.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/metrics", metricsRoutes);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
