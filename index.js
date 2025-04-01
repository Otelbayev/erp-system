import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/index.js";
import authController from "./controllers/auth.controller.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", router);

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 3400;
    mongoose.connect(process.env.MONGO_URI).then(async () => {
      console.log("Connected to mongodb");
      await authController.createDefaltAdmin();
    });

    app.listen(PORT, () => {
      console.log(`Server is running ${PORT} PORT`);
    });
  } catch (e) {
    console.log("MongoDB error " + e);
  }
};

bootstrap();
