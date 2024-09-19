const mysql  = require('mysql')
const db = mysql.createPool({
    host:"8.140.230.148",
    user: "root",//用户名
    password: "Root666888!",
     database: "testdata", //指定要操
})