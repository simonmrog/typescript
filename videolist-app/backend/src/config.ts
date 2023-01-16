import dotenv from "dotenv";
dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  MONGO_CONN: process.env.MONGO_CONN || "mongodb://localhost:27017",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mongodb",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
}
