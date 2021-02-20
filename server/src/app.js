const express = require('express');
const mongoose = require('../src/db/connection.js');
const router = require('./router/banking.js');
require('dotenv');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/',router);
app.use(express.urlencoded({extended: false}))


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})