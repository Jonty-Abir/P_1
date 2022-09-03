// external import's
const express= require('express');
const dotenv= require('dotenv');
const axios = require('axios');
const mongoose= require('mongoose');

//internal import's
const {errorHandle,notFound}= require('./middleware/common/defaultErrorHandler');
const route= require('./router/router');
// pass env's
dotenv.config();

const app= express();

// connect with DB
mongoose.connect(`${process.env.DB_STR}`)
.then((d)=>console.log(`DataBase connection successful on ${d.connection.host}....`))
.catch((err)=>console.log(err))


app.use(express.urlencoded({extended:true}));
app.use(express.json());
// make static
app.use(express.static(`${__dirname}/public/`));

// set view engine
  app.set('view engine', 'ejs');


  // middleware
  app.use('/',route);
  
  // error handaling middleware
  app.use(notFound);
  app.use(errorHandle);

app.listen(5000,()=>console.log(`app listen on:${process.env.PORT}`));
