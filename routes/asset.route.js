import express from "express";
import { addAsset, deleteAsset, getAsset, updateAsset } from "../controller/asset.controller.js";
const router = express.Router();

router.post("/add", addAsset);
router.get("/", getAsset);
router.put("/update/:id",updateAsset);
router.delete("/delete/:id",deleteAsset);


export default router;
