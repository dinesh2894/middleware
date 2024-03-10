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

// Different type of request propeties
// method, hostname, path, app, baseUrl
app.use((req,res,next)=>{
    console.log(req.method, req.hostname, req.path);
   console.log(req.body);
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