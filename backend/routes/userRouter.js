//import { index } from '../index';
//import { Router } from "express";
const Router = require("Router");
const index = require("index");

const userRouter = Router();
userRouter.post('/register', index);

export default userRouter;