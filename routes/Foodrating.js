const Express = require('express')
const db = require("../Connection/connect.js")
const route = Express.Router()

route.get('/foodrating', (req, res) => {
    let sql = 'SELECT * FROM food_rating'; 
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });

route.get('/hotel',(req,res)=>{
    res.send('We are on posts food rating')

})

module.exports = route;