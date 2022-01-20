const express = require("express");

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.use('/auth');

/*app.post('/auth/register', async (req, res) =>{
  try{
      console.log("заработало!!")
      const {email, password} = req.body
      console.log(email, password)
      const candidate = await pool.query('SELECT * FROM users WHERE email = $1', [email])
      console.log(candidate.rows[0])
      if(candidate){
         return res.status(400).json({message:'Такой пользователь уже существует'})
      }
  } catch(e){
      res.status(500).json({message:'Что-то пошло не так, попробуйте еще раз'})
  }
      
});*/

app.get("/auth/register", function(request, response){
   
  console.log("Route /auth/register");
  response.send("Register");
});

app.get("/", function(request, response){
   
  console.log("Route /");
  response.send("Hello");
});


app.listen(5000, function(){
  console.log('Сервер запущен на порту 5000')
});