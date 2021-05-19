const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();


//middleware
app.use(cors())
app.use(bodyParser.json())


//connect to db
mongoose.connect("mongodb://localhost:27017/restApi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


//routes
const postRoute = require('./routes/posts')
 
app.use('/posts',postRoute);


//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});


//how do we listen the server
app.listen(3000,() => {
    console.log('server is up')
});
