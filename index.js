const express = require('express')
const app = express()
const port = 8000

const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'react_bbs',
  password: '12345',
  database: 'react_bbs'
})

db.connect()

app.get('/', (req, res) => {
  const sql = "INSERT INTO requested (rowno) VALUES (1)"
  db.query(sql, (err, rows, fields) => {
    if (err) throw err;  
    console.log('성공');
    console.log('데이터 추가 성공')
  })

  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// db.end()