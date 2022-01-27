const {Router} = require('express');
//const bcrypt = require('bcryptjs');
const {getConnection}=require("typeorm");

const users = require('../../src/entity/users.ts')

// can be used once createConnection is called and is resolved
const connection = getConnection();

const router = Router();


router.post('/auth/register', async (req, res) =>{
    try{
        const {email} = req.body
        const candidate = await users.findOne(email);
        console.log(candidate.rows[0])
        
        if(candidate.rows[0]){
           return res.status(400).json({message:'Такой пользователь уже существует'})
        }
        console.log('Пользователь не найдет, будем создавать')
        //const hashedPassword = await bcrypt.hash(password, 12);
        
        //await pool.query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`, [email, hashedPassword]);
        res.status(201).json({message:"Пользователь создан"})

    } catch(e){
        res.status(500).json({message:'Что-то пошло не так, попробуйте еще раз'})
    }
});