import express from "express";
import { addAsset } from "../controller/asset.controller.js";
const router = express.Router();

router.post("/add", addAsset);


export default router;
