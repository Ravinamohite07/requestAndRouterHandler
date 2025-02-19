const express = require("express");

const app = express();

app.use("/hello/2",(req,res) =>{
    res.send("hello...from hello/2!!");
});

app.use("/hello",(req,res) =>{
    res.send("hello...!!");
});

app.use("/test",(req,res) => {
    res.send("hello from the test..!");
});

app.use("/",(req,res) =>{
    res.send("hello from the server...!");
});



app.listen(3000,() =>{
    console.log("Server is successfully listen on port 3000");
});


//http://localhost:3000/hello =>  hello!!
//http://localhost:3000/hello/2 => hello...from hello/2!!