const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// require("./NewsModel")
require("./TourGuideModel")
require("./TouristModel")
require("./NewTourGuideModel")
require("./Comments")

// const NewsAtricle = mongoose.model("newsatricle")
const TourGuide = mongoose.model("tourguide")
const Tourist = mongoose.model("tourist")
const NewTourGuide = mongoose.model("newtourguide")
const Comments = mongoose.model("comments")

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



//Tour Guide
app.post('/tour-guide',(req,res) =>{
    const tourguide = new TourGuide({
        username : req.body.username,
        fullname:req.body.fullname,
        email : req.body.email,
        phone : req.body.phone, 
        licenseNo : req.body.licenseNo,
        languageProficiencies:req.body.languageProficiencies,
        type: req.body.type,
        description: req.body.description
        
    })
    tourguide.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


app.get('/tour-guide',(req,res) =>{
    TourGuide.find({})
  .then(data =>{
      console.log(data)
      res.json({data})
  }).catch(err => {
    console.log(err)
})
})

app.get('/tour-guide/:id',(req,res) =>{
    TourGuide.find(req.body.id)
  .then(data =>{
      console.log(data)
      res.send(data)
  }).catch(err => {
    console.log(err)
})
})

// app.get('http://localhost:3000/tour-guide/${id}',(req,res) =>{
//     TourGuide.find(id)
//   .then(data =>{
//       console.log(data)
//       res.send(data)
//   }).catch(err => {
//     console.log(err)
// })
// })


//Tourist
app.post('/tourist/preferences',(req,res) =>{
    const tourist = new Tourist({
        country : req.body.country,
        language:req.body.language,
        preferedType : req.body.preferedType,
        
    })
    tourist.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


//Tour Guide New
app.post('/newtour-guide',(req,res) =>{
    const newtourguide = new NewTourGuide({
        name : req.body.name,
        alias:req.body.alias,
        email : req.body.email,
        phone : req.body.phone, 
        licenseNo : req.body.licenseNo,
        language:req.body.language,
        type: req.body.type,
        description: req.body.description
        
    })
    newtourguide.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


app.get('/newtour-guide',(req,res) =>{
    NewTourGuide.find({})
  .then(data =>{
    //   console.log(data)
    console.log("CALLED")
      res.status(200).json({data})
  }).catch(err => {
    console.log(err)
})
})

//Comment
app.post('/comment',(req,res) =>{
    const comments = new Comments({
        name : req.body.name,
        date : req.body.date,
        review : req.body.review
        
    })
    comments.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.get('/comment',(req,res) =>{
    Comments.find({})
  .then(data =>{
      console.log(data)
      res.json(data)
  }).catch(err => {
    console.log(err)
})
})




app.listen(3000,() =>{
    console.log("Listening on 3000")
})  