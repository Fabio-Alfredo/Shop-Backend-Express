import express from "express";
import { config } from "./src/config/config.js";
import db from "./src/models/index.js";

const app = express();

db.sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
});
