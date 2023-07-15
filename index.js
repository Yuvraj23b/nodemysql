const express = require('express');

const session = require("express-session")

const app = express()

const BodyParser = require('body-parser')

const Hotel = require('./routes/Hotel')

const Product = require('./routes/Food')

const Order = require('./routes/Order')

const Like = require('./routes/Like')

const User = require('./routes/User')

const db = require('./Connection/connect.js')

const cors = require('cors')
// atle explain kar ne karvanu shu 6e?

app.use(BodyParser.json())

app.use(cors())

app.use('/product',Product)

app.use('/like',Like);

app.use('/hotel',Hotel);

app.use('/user',User)

app.use('/order',User)

app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.listen(5000)