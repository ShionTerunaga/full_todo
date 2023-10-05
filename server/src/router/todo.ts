import { Router,Request,Response } from "express";
import { db } from "../db/db";
import { todoData } from "../shared/type";

export const todo=Router();
//データを取得
todo.get('/getList/:table',(req:Request,res:Response)=>{
    const {table}=req.params;
    db.serialize(()=>{
        db.all(`SELECT * FROM ${table}`,(err:Error|null,rows:todoData[])=>{
            if(err){
                return res.json({
                    data:"error",
                });
            }else{
                return res.json({
                    data:rows,
                });
            }
        });
    });
});
//todoアイテムを投稿
todo.post('/postTodo/:table',(req:Request,res:Response)=>{
    const {table}=req.params;
    const {id,todo,checked}=req.body;
    db.serialize(()=>{
        db.run(`INSERT INTO ${table}(id,todo,checked) VALUES ($1,$2,$3)`,[id,todo,checked]);
        db.all(`SELECT * FROM ${table}`,(err:Error|null,rows:todoData[])=>{
            if(err){
                return res.json({
                    data:"error"
                });
            }else{
                return res.json({
                    data:rows,
                });
            }
        })
    });
});
//todoの内容を更新
todo.put('/updateTodo/:table',(req:Request,res:Response)=>{
    const {table}=req.params;
    const {id,todo,checked}=req.body;
    db.serialize(()=>{
        db.run(`UPDATE ${table} SET todo=$1, checked=$2 WHERE id=$id`,[todo,checked,id]);
        db.all(`SELECT * FROM ${table}`,(err:Error|null,rows:todoData[])=>{
            if(err){
                return res.json({
                    data:"error"
                });
            }else{
                return res.json({
                    data:rows,
                });
            }
        })
    });
});
//todoの内容を削除
todo.delete('/deleteTodo/:table/:id',(req:Request,res:Response)=>{
    const {table, id}=req.params;
    db.serialize(()=>{
        db.run(`DELETE FROM ${table} WHERE id=$id`,[id]);
        db.all(`SELECT * FROM ${table}`,(err:Error|null,rows:todoData[])=>{
            if(err){
                return res.json({
                    data:"error"
                });
            }else{
                return res.json({
                    data:rows,
                });
            }
        })
    });
})

