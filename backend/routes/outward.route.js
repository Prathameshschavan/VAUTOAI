import express from "express";
import { addOutward } from "../controller/outward.controller.js";

const router = express.Router();

router.post("/out", addOutward );

export default router;