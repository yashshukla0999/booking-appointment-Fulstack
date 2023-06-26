const express = require('express');
const path =require('path')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: false}));

const userRoute = require('./routes/user')

const sequelize = require('./util/database')
app.use(cors());
  app.use(userRoute)
  
  sequelize
  .sync( )
  .then(result => {
     console.log('database connected')
     app.listen(9000) 
      })
  .catch(err => console.log(err))