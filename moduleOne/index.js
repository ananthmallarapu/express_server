/*const express=require("express");
const path =require('path');
var bodyParser = require('body-parser');
const app=express();
var routerfile=require("./routerfile.js");
app.use(bodyParser.json());
app.use("/",routerfile);


app.listen(3000,() =>{
    console.log("server running on port 3000");
});*/

module.exports=require("./moduleOneRouter");
