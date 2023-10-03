import { Router,Request,Response } from "express";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { db } from "../db/db";
import { sqlData } from "../shared/type";
export const auth=Router();
//新規作成
auth.post('/signup',async(req:Request,res:Response)=>{
    const {name,email,password}=req.body;//ユーザー情報を取得する
    const uuid:string=v4();//id作成
    const id:string='a'+uuid.replace(/-/g,'');//-はsqlにて使えないらしいので抜き取る
    const hashedpassword=await bcrypt.hash(password,10);//ハッシュ化(今回は10回hash化)を行う
    try{
        db.serialize(()=>{
            db.all(`SELECT * FROM userinfo WHERE email=$1`,[email],(err:Error|null,rows:sqlData[])=>{
                if(rows.length>0){
                    return res.status(200).json({
                        data:"データはもうすでにあります"
                    })
                }
                else{
                    db.run(`INSERT INTO userinfo(name,email,password,id) VALUES($1 , $2 , $3 , $4)`,[name,email,hashedpassword,id]);
                    db.run(`CREATE TABLE ${id}(id VARCHAR(255),todo VARCHAR(255),checked VARCHAR(255))`);
                    db.all(`SELECT * FROM userinfo WHERE email=$1`,[email],(err:Error|null,rows:sqlData[])=>{
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
});
//ログイン
auth.post('/login',async(req:Request,res:Response)=>{
    const {email,password}=req.body;
    db.serialize(()=>{
        db.all('SELECT * FROM userinfo',async(err:Error|null,rows:sqlData[])=>{
            if(err){
                return res.json({
                    data:"error1"
                })
            }else if(rows.length==0){
                return res.json({
                    data:"ユーザ登録されていません。"
                })
            }else{
                const isMatch=await bcrypt.compare(password,rows[0].password)
                if(!isMatch){
                    return res.json({
                        data:"パスワードが間違っています"
                    })
                }else{
                    return res.json({
                        data:rows[0]
                    })
                }
            }
        })
    })
})