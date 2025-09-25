// import mysql from 'mysql2/promise';

// let connection;

// async function initDB() {
//     connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         database: 'nodejsbasic', // ⚠️ bỏ khoảng trắng
//     });

//     const [results, fields] = await connection.query('SELECT * FROM users');
//     console.log("check mysql");
//     console.log(results);
// }

// initDB();

// export default connection;
// src/configs/connectDB.js
// host: 'host.docker.internal' sử dụng docker
// host: "localhost" chạy cụ bộ
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // nếu có mật khẩu MySQL thì thêm vào
  database: "nodejsbasic",
});

export default pool;
