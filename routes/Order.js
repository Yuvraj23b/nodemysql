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

route.post('/', (req,res) => {
    let post = {title:'Post one', body:'this is post'};
    let sql = 'INSERT INTO order SET?';
    let query = db.query(sql,post,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Inserted succesfully')
    });
});



route.get('/', (req, res) => {
    let sql = 'SELECT * FROM order';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });


module.exports = route;