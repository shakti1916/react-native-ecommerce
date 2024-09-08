import express, { Request, Response } from 'express';
import cors from 'cors';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { connectDB } from './db/config';


const app = express();
const PORT = 3000;
dotenv.config();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
connectDB()



app.get("/shakti",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"shakti this side"
    })
})

app.listen(PORT,()=>{
    console.log("server connected")
})

