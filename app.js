require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json());

const person = require("./src/routes/person")

app.use("/person",person)

app.use("/test",(req,res)=>{
    const message = req.query.message;

    res.send({"message":message})
})

app.use("/",(req,res)=>{
    res.send({"message":"the server is running", "port":process.env.SERVER_PORT})
})



const PORT = process.env.SERVER_PORT || 3005
app.listen(PORT,()=>{
    console.log(`the server is running on port ${process.env.SERVER_PORT}`);
})