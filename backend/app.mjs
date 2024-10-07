import express from 'express';
const {json} = express;
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors())

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'db_login'
});

connection.connect((error)=>{
    if(error) throw error;
    console.log('success');
})

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM users',(error,result,field)=>{
        res.json(result);
    });
});


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});