var express = require('express');
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var emp = require('./model/employee');


var url = "mongodb://localhost/mydb1"
//var url = "mongodb+srv://sonyrenjita:mangoHONET@cluster0-sbret.mongodb.net/dummyb?retryWrites=true&w=majority"

const app =express();
//var app = new express();
const chalk = require('chalk');
const path = require('path');

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err) throw err
    else{
        console.log("db connected");
    }
})

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen(8000,function(req,res){
    console.log("server started"+chalk.red('8000'));
});
//app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});
app.post("/home",(req,res)=>{
    var e1 = new emp();
    e1.eid = req.body.eid;
    e1.name = req.body.ename;
    e1.salary = req.body.esal;
    e1.save((err)=>{
        if(err) throw err;
        else{
            res.redirect("/view");
        }
    })
});
app.get("/view",(req,res)=>{
    emp.find({},(err,result)=>{
        if(err) throw err;
        else{
            res.render("view",{emplist:result});
        }
    })
})


