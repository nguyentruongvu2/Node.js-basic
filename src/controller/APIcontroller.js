import pool from "../configs/connectDB.js";

let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.query("SELECT * FROM student ");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let getDetailUser = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.query(`select * from student where id = ?`, [userId]);

  if (!user || user.length === 0) {
    return res.status(404).json({
      message: "Student not found",
      data: null,
    });
  }

  return res.status(200).json({
    message: "ok",
    data: user,
  });
};

let createNewUser = async (req, res) => {
  let { name, gender, email, phone, className } = req.body;
  if (!name || !gender || !email || !phone || !className) {
    return res.status(200).json({
      message: "Missing data",
    });
  }
  await pool.execute(
    "Insert into student(name,gender,email,phone,class) values (?,?,?,?,?)",
    [name, gender, email, phone, className]
  );
  return res.status(200).json({
    message: "Thêm mới thành công",
  });
};

let updateUser = async (req, res) => {
  let { id, name, gender, email, phone, className } = req.body;
  if (!name || !gender || !email || !phone || !className || !id) {
    return res.status(400).json({
      message: "Missing data",
    });
  }

  // Kiểm tra id có tồn tại không
  let [existing] = await pool.query("select * from student where id = ?", [id]);
  if (!existing || existing.length === 0) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  await pool.execute(
    "update student set name=?, gender=?, email=?, phone=?, class=? where id=?",
    [name, gender, email, phone, className, id]
  );
  return res.status(200).json({
    message: "Cập nhật thành công",
  });
};

let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(400).json({
      message: "Missing data",
    });
  }

  // Kiểm tra id có tồn tại không
  let [existing] = await pool.query("select * from student where id = ?", [
    userId,
  ]);
  if (!existing || existing.length === 0) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  await pool.execute("delete from student where id = ?", [userId]);
  return res.status(200).json({
    message: "Xóa thành công",
  });
};
export default {
  getAllUser,
  getDetailUser,
  createNewUser,
  updateUser,
  deleteUser,
};
