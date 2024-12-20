import { Sequelize } from "sequelize";
import { config } from "./config.js";

const sequelize = new Sequelize({
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

const connectDb = async () => {

  try {
    await sequelize.authenticate();
    console.log("conecction a la db");
  } catch (e) {
    console.error(e);
  }
};

export default connectDb;
