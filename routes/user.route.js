import express from "express";
const router = express.Router();
import { login, register } from "../controller/user.controller.js";

router.get("/", (req, res) => {
  res.send("hiii");
});

router.post("/register", register);
router.post("/login", login);

export default router;
