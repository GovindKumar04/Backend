import express from 'express';
import 'dotenv/config';

const app=express();
app.get('/',(req,res)=>{
    res.send("<h1>This is the deployed page<h1/>")
})
app.get('/user',(req,res)=>{
    res.send("My name is Govind Kumar")
})
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`App listening to port ${port}`);
    
})