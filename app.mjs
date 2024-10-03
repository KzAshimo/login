import express, { json } from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

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