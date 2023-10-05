import express from "express";
import cors from 'cors';
import { auth } from "./router/auth";
import { todo } from "./router/todo";
const app=express();
const PORT=8080;
app.use(express.json());
app.use(cors())
app.use('/auth',auth);
app.use('/todo',todo);
app.listen(PORT);