import { Sequelize } from 'sequelize';
import process from 'process';
import { config } from './config.js';

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize({
    username: config.db_user,
    password: config.db_password,
    database: config.db_name,
    dialect: config.db_dialect,

    // Configuración de conexión con socket (si aplica)
    dialectOptions: {
      socketPath: config.db_host,
    },
  });
}

export default sequelize;
