const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const routeRegister = require('./node_server/Routes/register');
//const reflect_metadata=require("reflect-metadata")

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.use('/auth', require('./node_server/Routes/auth.routes'));
app.use(routeRegister);


app.get("/", function(request, response){
   
  console.log("Route /");
  response.send("Hello");
});


app.listen(process.env.SERVER_PORT, function(){
  console.log('Сервер запущен на порту 5000')
});