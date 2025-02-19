const express = require("express");

const app = express();

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

//This will match all the HTTP method api call to /test
app.use("/test",(req,res) =>{
    res.send("hello from the server..!");
});

app.listen(3000,() =>{
    console.log("Server is successfully listen on port 3000");
});

//GET: http://localhost:3000/user => "firstName": "Ravina",
//                                   "lastName": "Mohite"

//POST: http://localhost:3000/user => User added successfully..!!

//DELETE: http://localhost:3000/user => User deleted Successfully...!
