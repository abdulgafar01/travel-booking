import "dotenv/config";

import express from "express";
import cors from "cors";

import packageRoutes from "./routes/packageRoutes.js";
import notFound from "./middleware/notFound.js";
import {errorHandler} from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Travel booking API is running",
  });
});

app.use("/api/packages", packageRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;