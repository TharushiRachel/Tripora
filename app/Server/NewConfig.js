const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'Tharushi',
  password : '1234',
  database : 'tripora'
});


const app = express();


// app.get('/tour-guide',(req,res) =>{
//     TourGuide.find({})
//   .then(data =>{
//       console.log(data)
//       res.send(data)
//   }).catch(err => {
//     console.log(err)
// })
// })

app.get('/tour-guide', function (req, res) {
    
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM tourguide', function (error, results, fields) {
      
        if (error) throw error;

      
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/tour-guide so you can see the data.');
});