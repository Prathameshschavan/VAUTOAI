import express from "express";
import { addOutward, getOutward } from "../controller/outward.controller.js";

const router = express.Router();

router.get("/", getOutward);
router.post("/out", addOutward );

export default router;