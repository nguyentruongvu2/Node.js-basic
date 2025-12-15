import pool from "../configs/connectDB.js";

let getHomePage = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM student ");
    let check = await pool.query("SELECT * FROM student ");
    console.log("data inside:", check);

    return res.render("index.ejs", { dataUser: rows });
  } catch (err) {
    console.error("Lỗi MySQL:", err);
    return res.status(500).send("Lỗi server!");
  }
};
let getDetailpage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.query(`select * from student where id = ?`, [userId]);
  console.log("check id", userId);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  console.log("Check req:", req.body);
  let { name, gender, email, phone, className } = req.body;
  await pool.execute(
    "Insert into student(name, gender, email, phone, class) values (?,?,?,?,?)",
    [name, gender, email, phone, className]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from student where id = ?", [userId]);
  return res.redirect("/");
};

let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("select * from student where id = ?", [id]);
  // return res.send(JSON.stringify(user));
  return res.render("update.ejs", { dataUser: user[0] });
};

let postUpdateUser = async (req, res) => {
  let { id, name, gender, email, phone, className } = req.body;
  await pool.execute(
    "update student set name=?, gender=?, email=?, phone=?, class=? where id=?",
    [name, gender, email, phone, className, id]
  );
  return res.redirect("/");
};
export default {
  getHomePage,
  getDetailpage,
  createNewUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
};
