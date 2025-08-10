import express from "express";
import bodyParser from "body-parser";
import generatorRoutes from "./routes/generator.routes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/postman", generatorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
