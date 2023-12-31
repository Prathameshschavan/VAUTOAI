import express from "express";
import {
  addMovementIn,
  updateMovementIn,
  deleteMovementIN,
  getAllMovementIns,
  addMovementOut,
} from "../controller/movement.controller.js";

const router = express.Router();

router.post("/out", addMovementOut);
router.post("/in", addMovementIn);
router.delete("/delete/:id", deleteMovementIN);
router.get("/", getAllMovementIns);
router.put("/updateCheckIn/:id", updateMovementIn);

export default router;
