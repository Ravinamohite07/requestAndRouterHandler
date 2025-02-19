const express = require("express");

const app = express();


app.use("/test",(req,res) => {
    res.send("hello from the test..!");
});

app.use("/hello",(req,res) =>{
    res.send("hello!!");
});

app.use("/",(req,res) =>{
    res.send("hello from the server...!");
});



app.listen(3000,() =>{
    console.log("Server is successfully listen on port 3000");
});