"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = void 0;
const express_1 = require("express");
const db_1 = require("../db/db");
exports.todo = (0, express_1.Router)();
//データを取得
exports.todo.get('/getList/:table', (req, res) => {
    const { table } = req.params;
    db_1.db.serialize(() => {
        db_1.db.all(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) {
                return res.json({
                    data: "error",
                });
            }
            else {
                return res.json({
                    data: rows,
                });
            }
        });
    });
});
//todoアイテムを投稿
exports.todo.post('/postTodo/:table', (req, res) => {
    const { table } = req.params;
    const { id, todo, checked } = req.body;
    db_1.db.serialize(() => {
        db_1.db.run(`INSERT INTO ${table}(id,todo,checked) VALUES ($1,$2,$3)`, [id, todo, checked]);
        db_1.db.all(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) {
                return res.json({
                    data: "error"
                });
            }
            else {
                return res.json({
                    data: rows,
                });
            }
        });
    });
});
//todoの内容を更新
exports.todo.put('/updateTodo/:table', (req, res) => {
    const { table } = req.params;
    const { id, todo, checked } = req.body;
    db_1.db.serialize(() => {
        db_1.db.run(`UPDATE ${table} SET todo=$1, checked=$2 WHERE id=$3`, [todo, checked, id]);
        db_1.db.all(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) {
                return res.json({
                    data: "error"
                });
            }
            else {
                return res.json({
                    data: rows,
                });
            }
        });
    });
});
//todoの内容を削除
exports.todo.delete('/deleteTodo/:table/:id', (req, res) => {
    const { table, id } = req.params;
    db_1.db.serialize(() => {
        db_1.db.run(`DELETE FROM ${table} WHERE id=$1`, [id]);
        db_1.db.all(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) {
                return res.json({
                    data: "error"
                });
            }
            else {
                return res.json({
                    data: rows,
                });
            }
        });
    });
});
