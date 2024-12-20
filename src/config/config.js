import 'dotenv/config'
const {
    PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT,
} = process.env;

const validateEnv  = (env, name)=>{
    if(!env)
        throw new Error (`${name} is required`);
    return env;
}

export const config = {
    port: validateEnv(PORT, 'PORT'),
    db_name: validateEnv(DB_NAME, 'DB_NAME'),
    db_user: validateEnv(DB_USER, 'DB_USER'),
    db_host: validateEnv(DB_HOST, 'DB_HOST'),
    db_dialect: validateEnv(DB_DIALECT, 'DB_DIALECT'),
    db_password: validateEnv(DB_PASSWORD, 'DB_PASSWORD')
}