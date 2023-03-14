import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
});

export default connection;