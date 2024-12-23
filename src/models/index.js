"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import sequelize from "../config/db.config.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const db = {};
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    import(path.join(__dirname, file))
      .then((modelModule) => {
        const model = modelModule.default(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      })
      .catch((error) => {
        console.error("Error al cargar el modelo:", error);
      });
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
