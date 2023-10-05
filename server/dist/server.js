"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./router/auth");
const todo_1 = require("./router/todo");
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/auth', auth_1.auth);
app.use('/todo', todo_1.todo);
app.listen(PORT);
