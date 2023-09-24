import express,{Request,Response} from "express";
import cors from 'cors';
import { db } from "./db/db";
const app=express();
const PORT=8080;
app.use(express.json());
app.use(cors())
app.get('/',(req:Request,res:Response)=>{
    db.serialize(()=>{
        db.each("SELECT * FROM userinfo",(err,row)=>{
            if(err){
                return res.json({result:err})
            }
            return res.json({
                result:row,
            })
        })
    })
})
app.listen(PORT);