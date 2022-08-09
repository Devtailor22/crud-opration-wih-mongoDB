const express = require("express");
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const connectDB = require('./server/database/db');
const passport = require('passport-local');
dotenv.config();

const PORT = process.env.port || 8080





app.use(morgan('tiny'));
app.use(express.json());



app.use(bodyparser.urlencoded({ extended:true }));

app.set("view engine","ejs");

// only in you sparte ejs and htl code
//app.set("views",path.resolve(__dirname,"views/ejs"));

//for use css js and image
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));

app.use('/',require('./server/routes/router'))
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});




