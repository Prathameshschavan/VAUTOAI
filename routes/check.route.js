import express from "express";
import { addCheckIn, addCheckOut, deleteCheckIN, getAllCheckIns, updateCheckIn } from "../controller/check.controller.js";


const router = express.Router()

router.post("/checkIn", addCheckIn);
router.post("/checkOut", addCheckOut);

router.delete("/delteCheck/:id", deleteCheckIN)

router.get("/allCheckIns", getAllCheckIns)
router.put("/updateCheckIn/:id", updateCheckIn)

export default router;