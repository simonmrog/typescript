import mongoose, { ConnectOptions } from "mongoose";

import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {};
    const db = await mongoose.connect(
      `${config.MONGO_CONN}/${config.MONGO_DATABASE}`, mongooseOptions
    );
    console.log("Database connection successful to:", db.connection.name);
  } catch(err) {
    console.error(err);
  }
})();
