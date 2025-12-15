import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // nếu có mật khẩu MySQL thì thêm vào
  database: "student_db",
});

export default pool;
