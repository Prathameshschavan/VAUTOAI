import express from "express";
import { addAsset, getAsset, updateAsset } from "../controller/asset.controller.js";
const router = express.Router();

router.post("/add", addAsset);
router.get("/", getAsset);
router.patch("/update",updateAsset);


export default router;
