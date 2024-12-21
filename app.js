import express from 'express'
import { config } from './src/config/config.js'
import { connectDb } from './src/config/dbConnection.config.js';

const app = express();

connectDb();

app.listen(config.port, ()=>{
    console.log(`Server is running on port ${config.port}`)
})