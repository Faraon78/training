const express = require("express");
const app = express();
const router = express.Router();

router.post('/register', async (req, res) =>{
  try{
    const{email, password} = req.body;
    console.log(email, password)
  } catch(e){
      res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }

})
app.use(function(request, response, next){     
    console.log("Middleware 1");
    next();
});
app.use(function(request, response, next){
     
    console.log("Middleware 2");
    response.send("Middleware 2");
});
app.listen(3000);