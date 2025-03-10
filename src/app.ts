import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from '../routes/router';
const app = express()
dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json())
app.use(urlencoded({extended:true}))


app.use('/api',router);


export default app;