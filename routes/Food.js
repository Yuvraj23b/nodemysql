const Express = require('express')
const mysql = require('mysql2');
const route = Express.Router()
const db = require("../Connection/connect.js")


// route.get('/addpost1', (req,res) => {
//     let post = {title:'Post one', body:'this is the first post'};
//     let sql = 'INSERT INTO restaurant SET?';
//     let query = db.query(sql,post,(err,result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Inserted succesfully')
//     });
// });



route.get('/food', (req, res) => {
    let sql = 'SELECT * FROM food';
    let query = db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results); // Send the results as JSON response
    });
  });

  
route.get('/food',(req,res)=>{
    res.send('We are on food table')

})


// route.post('/',(req,res)=>{
//     async function getData(){
//         console.log(req.body)
//         try{
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
//     getData();
// })

// route.get('/',async (req,res)=>{
//     try{
//         //console.log(req.query.hid)
//     }catch(err){
//         res.status(400).json(err)
//         //res.status(500).json(err)
//     }
// })

// route.get('/fetch',async (req,res)=>{
//     try{
//         //console.log(req.query.hid,"hii")
//     }catch(err){
//         res.status(400).json(err)
//         //res.status(500).json(err)
//     }
// })

// route.get('/test', async (req,res)=>{
//     try{
//     }catch(err){
//         res.status(400).json(err)
//         //res.status(500).json(err)
//     }
// })

module.exports = route;