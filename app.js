const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.listen(8888,()=>{
    console.log('port',8888)
})

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"47.121.191.226",
    user: "root",//用户名
    password: "am915679480",
     database: "testdata", //指定要操
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
})

app.get('/api/info',(req,res)=>{
    const sql = "select * from info"
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
          return res.send({state:1,message:err})
        }else{
            return res.send({ state: 0, message: "查询成功", data: result });

        }
    })
})