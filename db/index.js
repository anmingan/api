const mysql  = require('mysql')
const db = mysql.createPool({
    host:"47.121.191.226",
    user: "root",//用户名
    password: "am915679480",
     database: "testdata", //指定要操
})