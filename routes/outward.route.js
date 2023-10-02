import express from "express";
import { addOutward, deleteOutward, getOutward, updateOutward } from "../controller/outward.controller.js";

const router = express.Router();

router.get("/", getOutward);
router.post("/out", addOutward );
router.delete("/delete/:id", deleteOutward );
router.put("/update/:id", updateOutward );

export default router;