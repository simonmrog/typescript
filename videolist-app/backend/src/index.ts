import config from "./config";
import app from "./app";
import "./database";

app.listen(config.SERVER_PORT, () => {
  console.log("Server running on port", config.SERVER_PORT);
});
