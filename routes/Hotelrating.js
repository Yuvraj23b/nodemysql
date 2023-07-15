const Express = require('express')
const mysql = require('mysql2')
const db = require("../Connection/connect.js")
const route = Express.Router()

// route.post('/',(req,res)=>{
//     async function getData(){
//         console.log(req.body)
//         try{
//             const products = await HOtelModel.create(req.body);
//             res.status(200).json(products)
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
//     getData();
// })

app.get('/hotelrating', (req,res) => {
    let post = {title:'Post one', body:'this is post'};
    let sql = 'INSERT INTO hotel_rating SET?';
    let query = db.query(sql,oost,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Inserted succesfully')
    });
});




route.get('/hotelrating', (req, res) => {
    let sql = 'SELECT * FROM hotel_rating'; //
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });

route.get('/hotelrating',(req,res)=>{
    res.send('We are on posts hotel rating')

})

module.exports = route;