const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');
const mongodb = require('./DB/connect');
const app = express();

connectDB('./DB/connection');
const port = 8080;

app.use(express.json({extended:false}));
app.use('/api/userModel', require('./Api/user'));
app.use('/', require('./routes'));

//app.listen(process.env.port || port);
//console.log('Web Server is listening at port ' + (process.env.port || port));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
