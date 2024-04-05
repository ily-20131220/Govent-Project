const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost', // 数据库服务器地址
    user     : 'admin', // 数据库用户名
    password : 'admin', // 数据库密码
    database : 'big_govent' // 数据库名
  });

connection.connect();

connection.query('SELECT * event', (error, results, fields) => {
    if (error) throw error;
    // 处理查询结果
    console.log(results);
  });
  
  // 关闭连接
connection.end();
  