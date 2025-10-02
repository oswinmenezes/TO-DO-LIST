import express from "express";
import pg from "pg";
import cors from "cors";
import env from "dotenv"

env.config();
const port=process.env.BACKEND_PORT ||3000;
const app=express();
app.use(express.json());
app.use(cors());
const db= new pg.Client({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
});
db.connect();
app.get("/getList",async(req,res)=>{
    const result=await db.query("SELECT * FROM ToDoList;");
    console.log(result.rows);
    res.json(result.rows);
});
app.post("/addNewItem",async(req,res)=>{
    const newItem=req.body.item;
    try{
        await db.query("INSERT INTO ToDoList(note) VALUES($1);",[newItem]);
        const result=await db.query("SELECT * FROM ToDoList;");
        res.json(result.rows);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
app.delete("/deleteItem/:id",async(req,res)=>{
    const id=req.params.id;
    await db.query("DELETE FROM ToDoList WHERE id=$1;",[id]);
    const result=await db.query("SELECT * FROM ToDoList;");
    res.json(result.rows);
});
app.listen(port,()=>{
    console.log(`server started running at port ${port}`);
});
