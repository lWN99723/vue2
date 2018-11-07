//1 加载模块mysql
const mysql = require('mysql');
//创建mysql连接池
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'saiou',
  port:3306,
  connectionLimit: 10 
});
//3把创建好的连接池导出
module.exports = pool;