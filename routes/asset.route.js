import express from "express";
import {
  addAsset,
  deleteAsset,
  getAsset,
  updateAsset,
  assignAsset,
} from "../controller/asset.controller.js";
const router = express.Router();

router.post("/add", addAsset);
router.post("/assign", assignAsset);
router.get("/", getAsset);
router.put("/update/:id", updateAsset);
router.delete("/delete/:id", deleteAsset);

export default router;
