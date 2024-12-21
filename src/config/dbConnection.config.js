import { Sequelize } from "sequelize";
import { config } from "./config.js";

export const sequelize = new Sequelize({
  username: config.db_user,
  password: config.db_password,
  database: config.db_name,
  dialect: config.db_dialect,

  //config for connection with socket
  dialectOptions: {
    socketPath: config.db_host,
  },
  //
});

export const connectDb = async () => {

  try {
    await sequelize.authenticate();
    console.log("conecction a la db");
  } catch (e) {
    console.error(e);
  }
};

