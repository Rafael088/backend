import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import users from './routes/users.js';


dotenv.config();

const app = express()

app.use(
    cors({

        origin: "*",

    })
)
app.use(express.json())
app.use(users)


export default app



