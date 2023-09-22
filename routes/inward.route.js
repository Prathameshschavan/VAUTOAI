import express from "express";
import {
  addInward,
  getAllInwards,
  deleteInwardIN,
  updateInwardIn,
} from "../controller/inward.controller.js";

const router = express.Router();

router.post("/add", addInward);

router.delete("/delteCheck/:id", deleteInwardIN);

router.get("/allCheckIns", getAllInwards);
router.put("/updateCheckIn/:id", updateInwardIn);

export default router;
