const Express = require('express')
const db = require("../Connection/connect.js")
const route = Express.Router()

app.get('/cart', (req,res) => {
    let post = {title:'Post one', body:'this is post'};
    let sql = 'INSERT INTO cart SET?';
    let query = db.query(sql,post,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Inserted succesfully')
    });
});


route.get('/cart', (req, res) => {
    let sql = 'SELECT * FROM cart '; 
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });

route.get('/cart',(req,res)=>{  // hu avu thodi var ma divo karvano 6e
    res.send('We are on posts cart')

})

module.exports = route;