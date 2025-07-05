import express from "express";
import pathRoutes from "./routes/paths.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/paths", pathRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
