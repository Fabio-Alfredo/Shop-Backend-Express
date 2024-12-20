import express from 'express'
import { config } from './src/config/config.js'
import connectdb from './src/config/dbConnection.config.js'


const app = express();
connectdb();

app.listen(config.port, ()=>{
    console.log(`Server is running on port ${config.port}`)
})