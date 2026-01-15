const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();
const port = 3000;

app.use(express.json({extended:false}));
app.use('/api/userModel', require('./Api/user'));
app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));