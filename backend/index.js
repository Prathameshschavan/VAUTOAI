import express from "express";
import mongoose from "mongoose";
import checkRoute from "./routes/check.route.js";
import inwardRoutes from "./routes/inward.route.js";
import movementRoutes from "./routes/movement.route.js";
import userRoute from "./routes/user.route.js";
import assetRoute from "./routes/asset.route.js";
import outwardRouter from "./routes/outward.route.js"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/visit", checkRoute);
app.use("/api/inward", inwardRoutes);
app.use("/api/movement", movementRoutes);
app.use("/api/auth", userRoute);
app.use("/api/asset", assetRoute);
app.use("/api/outward", outwardRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connect();
  console.log(`hey there this is runnung on PORT : ${PORT}`);
});
