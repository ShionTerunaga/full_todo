"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../db/db");
exports.auth = (0, express_1.Router)();
//新規作成
exports.auth.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body; //ユーザー情報を取得する
    const uuid = (0, uuid_1.v4)(); //id作成
    const id = 'a' + uuid.replace(/-/g, ''); //-はsqlにて使えないらしいので抜き取る
    const hashedpassword = yield bcrypt_1.default.hash(password, 10); //ハッシュ化(今回は10回hash化)を行う
    try {
        db_1.db.serialize(() => {
            db_1.db.all(`SELECT * FROM userinfo WHERE email=$1`, [email], (err, rows) => {
                if (rows.length > 0) {
                    return res.status(200).json({
                        data: "データはもうすでにあります"
                    });
                }
                else {
                    db_1.db.run(`INSERT INTO userinfo(name,email,password,id) VALUES($1 , $2 , $3 , $4)`, [name, email, hashedpassword, id]);
                    db_1.db.run(`CREATE TABLE ${id}(id VARCHAR(255),todo VARCHAR(255),checked TINYINT(1))`);
                    db_1.db.all(`SELECT * FROM userinfo WHERE email=$1`, [email], (err, rows) => {
                        return res.status(200).json({
                            data: rows,
                        });
                    });
                }
            });
        });
    }
    catch (e) {
        return res.json({
            data: "error"
        });
    }
}));
//ログイン
exports.auth.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    db_1.db.serialize(() => {
        db_1.db.all('SELECT * FROM userinfo WHERE email=$1', [email], (err, rows) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return res.json({
                    data: "error1"
                });
            }
            else if (rows.length === 0) {
                return res.json({
                    data: "ユーザ登録されていません。"
                });
            }
            else {
                const isMatch = yield bcrypt_1.default.compare(password, rows[0].password);
                if (!isMatch) {
                    return res.json({
                        data: "パスワードが違います。"
                    });
                }
                else {
                    return res.json({
                        data: rows
                    });
                }
            }
        }));
    });
}));
