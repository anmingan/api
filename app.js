
import express from 'express';
import cors from 'cors';
import dayjs from 'dayjs';
import bodyParser from 'body-parser';
import  { batchConnect} from './utils.js'


const app = express()
app.use(cors())
app.use(bodyParser.json());
app.listen(8888,()=>{
    console.log('port',8888)
})

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host:"47.121.191.226",
//     user: "root",//用户名
//     password: "am915679480",
//      database: "testdata", //指定要操
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as id ' + connection.threadId);
// })

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

// 查询所有数据
app.get('/api/getAllRecord',(req,res)=>{
  const sql = "select * from flyRecords"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "查询成功", data: result });

    }
 })
})

app.get("/api/addRecord",(req,res)=>{
  const sql = "insert into flyRecords(datainfo) values('"+dayjs(new Date()).format('YYYY-MM-DD')+"')"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "增加" });

    }
 })
})

app.post("/api/addFeeling",(req,res)=>{
  const feeling = req.body.feeling
  const sql = "update flyRecords set feeling = '"+feeling+"' where datainfo='"+dayjs(new Date()).format('YYYY-MM-DD')+"'"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "增加" });

    }
 })
})


// 查询所有数据
app.get('/api/getAllDayRecord',(req,res)=>{
  const sql = "select * from dayRecords"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "查询成功", data: result });

    }
 })
})


app.post("/api/addDayRecord",(req,res)=>{
  const feeling = req.body.status
  const sql = "insert into dayRecords(datainfo,status) values('"+dayjs(new Date()).format('YYYY-MM-DD')+"','"+feeling+"')"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "增加" });

    }
 })
})
app.post("/api/addReason",(req,res)=>{
  const feeling = req.body.feeling
  const sql = "update dayRecords set reason = '"+feeling+"' where datainfo='"+dayjs(new Date()).format('YYYY-MM-DD')+"'"
  connection.query(sql,(err,result)=>{
    if(err){
        console.log(err)
      return res.send({state:1,message:err})
    }else{
        return res.send({ state: 0, message: "增加" });

    }
 })
})
// 做饭
app.get("/api/getGoodsRecord", (req, res) => {
  const sql = "select * from foodsRecords"
  batchConnect(sql,req, res)
})
app.get("/api/gettrainingProgramsRecord",(req, res) => {
  const sql = "select * from trainingProgramRecords"
  batchConnect(sql,req, res)
})

app.post("/api/login",(req,res)=>{
  const username = req.body.username
  const password = req.body.password
  console.log(username,password)
})
