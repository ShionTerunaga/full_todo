"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    db_1.db.serialize(() => {
        db_1.db.each("SELECT * FROM userinfo", (err, row) => {
            if (err) {
                return res.json({ result: err });
            }
            return res.json({
                result: row,
            });
        });
    });
});
app.listen(PORT);
