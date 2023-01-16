import app from "./app"; 
import config from "./config";
import "./database";

app.listen(config.SERVER_PORT, () => {
  console.log("Server running on port", config.SERVER_PORT);
});
