import mysql from 'mysql'

const connection = mysql.createConnection({
  host: '47.121.191.226',
  user: 'root', //用户名
  password: 'am915679480',
  database: 'testdata' //指定要操
})
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack)
    return
  }
  console.log('Connected to MySQL as id ' + connection.threadId)
})

const batchConnect = (sql, req, res) => {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err)
      return res.send({ state: 1, message: err })
    } else {
      return res.send({ state: 0, data: result })
    }
  })
}

export { batchConnect }
