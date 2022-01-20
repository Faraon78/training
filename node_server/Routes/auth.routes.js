const {Router} = require('express');
const router = Router();
const pool = require('../DataBase/pool');

router.post('/register', async (req, res) =>{
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
});

router.post('/login', async (req, res) =>{
    
});

module.exports = router;