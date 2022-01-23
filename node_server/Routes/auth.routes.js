const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const cookieParser = require("cookie-parser");
const router = Router();
const pool = require('../DataBase/pool');

router.post('/register', async (req, res) =>{
    try{
        const {email, password} = req.body
        const candidate = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        console.log(candidate.rows[0])
        
        if(candidate.rows[0]){
           return res.status(400).json({message:'Такой пользователь уже существует'})
        }
        console.log('Пользователь не найдет, будем создавать')
        const hashedPassword = await bcrypt.hash(password, 12);
        
        await pool.query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`, [email, hashedPassword]);
        res.status(201).json({message:"Пользователь создан"})

    } catch(e){
        res.status(500).json({message:'Что-то пошло не так, попробуйте еще раз'})
    }
});

router.post('/login', async (req, res) =>{
    try{
        console.log("заработал login!!")
        const {email, password} = req.body
        console.log(email, password)
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
                
        if(!user){
           return res.status(400).json({message:'Пользователь не найден'})
        }
        const isMatch = await bcrypt.compare(password, user.rows[0].password)
        console.log(isMatch)
        if(!isMatch){
            return res.status(400).json({message:'Неверный пароль'})
        }
        console.log("Дошли до создания токена");
        
        const token = jwt.sign(
            {userId:user.rows[0].id},
            "Olga Shchahliak in ITechArt",
            {expiresIn:'1h'}
        );
        console.log("token: " + token)
        
        return res
        .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "Logged in successfully"});
        //res.json({token, userId:user.rows[0].id})

    } catch(e){
        res.status(500).json({message:'Что-то пошло не так, попробуйте еще раз'})
    }
});

const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(403);
    }
    try {
      const data = jwt.verify(token, "YOUR_SECRET_KEY");
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };
router.get("/logout", authorization, (req, res) => {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out" });
  });

module.exports = router;