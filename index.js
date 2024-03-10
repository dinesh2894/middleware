const express = require("express");
const app = express();

//port
const port = 8080;

// 1st middlware
app.use((req,res,next)=>{
    console.log("Hi, i am 1st middle-ware");
    next();
    console.log("This is after next");
});

// 2nd middleware
app.use((req,res,next)=>{
    console.log("Hi, i am 2st middle-ware");
    next();
});



app.get("/",(req,res)=>{
    res.send("I am root!!");
});

app.get("/random",(req,res)=>{
    res.send("This is random page");l̥
});

// server
app.listen(port, () => {
    console.log(`Server is on port :${port}`);
})