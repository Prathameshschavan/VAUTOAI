import express from "express"
import { getRecycle, restoreItemFromRecycle } from "../controller/recycleBin.controller.js";
const router =  express.Router();

router.get("/", getRecycle);
router.post("/restore/:id", restoreItemFromRecycle);

export default router;