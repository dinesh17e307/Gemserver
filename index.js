const express=require('express');
const app =express();
const cors=require('cors')
const path=require('path')
const sendQuoteMail=require('./server/Routes/SendQuotemail')
const bodayParser=require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
app.use(bodayParser.json())
app.use(bodayParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',sendQuoteMail)

app.listen(process.env.PORT || 3001,console.log('connected to 3001...'))