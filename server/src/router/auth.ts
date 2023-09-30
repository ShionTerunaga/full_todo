import { Router,Request,Response } from "express";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { db } from "../db/db";
export const auth=Router();

auth.post('/signup',async(req:Request,res:Response)=>{
    const {name,email,password}=req.body;//ユーザー情報を取得する
    const uuid:string=v4();//id作成
    const id:string='a'+uuid.replace(/-/g,'');//-はsqlにて使えないらしいので抜き取る
    const hashedpassword=await bcrypt.hash(password,10);//ハッシュ化(今回は10回hash化)を行う
    try{
        db.serialize(()=>{
            db.all(`SELECT * FROM userinfo WHERE email=$1`,[email],(err,rows)=>{
                if(rows.length>0){
                    return res.status(200).json({
                        data:"データはもうすでにあります"
                    })
                }
                else{
                    db.run(`INSERT INTO userinfo(name,email,password,id) VALUES($1 , $2 , $3 , $4)`,[name,email,hashedpassword,id]);
                    db.run(`CREATE TABLE ${id}(todo VARCHAR(255),checked VARCHAR(255))`);
                    db.all(`SELECT * FROM userinfo WHERE email=$1`,[email],(err,rows)=>{
                        return res.status(200).json({
                            data:rows,
                        })
                    })
                }
            })
        })
    }catch(e){
        return res.json({
            data:"error"
        })
    }
})