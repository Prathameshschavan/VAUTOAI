import express from "express"
import {addMovementIn, updateMovementIn,deleteMovementIN, getAllMovementIns, addMovementOut} from "../controller/movement.controller.js"

const router = express.Router()

router.get("/", getAllMovementIns)
router.post("/out", addMovementOut );
router.post("/in", addMovementIn )
router.delete("/delteCheck/:id", deleteMovementIN)
router.put("/updateCheckIn/:id", updateMovementIn)

export default router;