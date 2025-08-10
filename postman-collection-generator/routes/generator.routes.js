import { Router } from "express";
import { generateCollection } from "../controllers/generator.controller.js";

const router = Router();

router.post("/generate", generateCollection);

export default router;
