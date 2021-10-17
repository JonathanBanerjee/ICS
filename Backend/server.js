//Load HTTP module
const express = require('express');
let mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
const port = 8000;
const saltRounds = 10;

app.use(express.json());

app.use(function (req, res, next) {

   res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
  res.send('Oh Huw!')
});

app.post('/logincheck', (req, res) => {
  // let con = mysql.createConnection({
  //     host: 'localhost',
  //     user: 'root',
  //     password: '',
  //     database: 'data'
  // });

  // con.connect(function(err) {
  //   var sql = "SELECT * FROM Users";
  //   con.query(sql, function (err, sqlresult) {
  //     if (err) throw err;
  //     if(sqlresult[0].username === req.body.post[0]){
  //       bcrypt.compare(req.body.post[1], sqlresult[0].password, function(err, result) {
  //           res.send(result);
  //       });
  //     }else{
  //       res.send(false);
  //     }
  //   });
  // });

  res.send(true);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
