import express from "express"
import { getRecycle } from "../controller/recycleBin.controller.js";
const router =  express.Router();

router.get("/", getRecycle);


export default router;