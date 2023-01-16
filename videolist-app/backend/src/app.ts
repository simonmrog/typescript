import express from "express";
import morgan from "morgan";
import cors from "cors";

import { errorHandler } from "./middlewares/error";
import videosRoutes from "./routes/videos.route";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/videos", videosRoutes);

// Error middleware
app.use(errorHandler);

export default app;
