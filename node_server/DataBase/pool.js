const Pool= require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usersdb',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
module.exports= pool; 
