const express = require("express");

const app = express();

//This will match all the HTTP method api call to /test
app.use("/user",(req,res) =>{
    res.send("hello from the server..!");
});

// This will only Handle GET Call to /user
app.get("/user",(req,res) =>{
    res.send({firstName: "Ravina",lastName:"Mohite"});
});

app.post("/user",(req,res)=>{
    res.send("User added successfully..!!");
});

app.delete("/user",(req,res) =>{
    res.send("User deleted Successfully...!");
});


app.listen(3000,() =>{
    console.log("Server is successfully listen on port 3000");
});

//GET: http://localhost:3000/user => hello from the server..!

//POST: http://localhost:3000/user => hello from the server..!

//DELETE: http://localhost:3000/user => hello from the server..!
