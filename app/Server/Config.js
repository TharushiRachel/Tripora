const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require("./NewsModel")

const NewsAtricle = mongoose.model("newsatricle")

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

const mongURI = "mongodb+srv://admin:admin@cluster0.nfeqj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",error)
})

app.post('/delete',(req,res) =>{
    NewsAtricle.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log("error",err)
    })
})

app.post('/update',(req,res) =>{
    NewsAtricle.findByIdAndUpdate(req.body.id ,{
        image : req.body.image,
        title : req.body.title,
        date : req.body.date, 
        source : req.body.source,
        description : req.body.description
    }).then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log("error",err)
    })
})

app.post('/send-data',(req,res) =>{
    const newsatricle = new NewsAtricle({
        image : req.body.image,
        title : req.body.title,
        date : req.body.date, 
        source : req.body.source,
        description : req.body.description
    })
    newsatricle.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.get('/',(req,res) =>{
    NewsAtricle.find({})
  .then(data =>{
      console.log(data)
      res.send(data)
  }).catch(err => {
    console.log(err)
})
})

app.listen(3000,() =>{
    console.log("Listening on 3000")
})  
