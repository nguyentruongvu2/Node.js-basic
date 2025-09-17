// import connection from "../configs/connectDB"

// let getHomePage = async (req, res) => {
//     let data = []
//     await connection.query(
//         'SELECT * FROM users',
//         function (err, results, fields) {
//             results.map((row) => {
//                 data.push({
//                     id: row.id,
//                     email: row.email,
//                     address: row.address,
//                     fristName: row.fristName,
//                     lastName: row.lastName
//                 })
//             })
//             console.log("data inside:", data)
//             return res.render('index.ejs', { dataUser: JSON.stringify(data) })
//         }
//     )

// }
// export default getHomePage
// src/controller/homeController.js
import pool from "../configs/connectDB.js";

let getHomePage = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM users ");
    let check = await pool.query("SELECT * FROM users ");
    console.log("data inside:", check);

    return res.render("index.ejs", { dataUser: rows });
  } catch (err) {
    console.error("Lỗi MySQL:", err);
    return res.status(500).send("Lỗi server!");
  }
};
let getDetailpage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.query(`select * from users where id = ?`, [userId]);
  console.log("check id", userId);
  return res.send(JSON.stringify(user));
};
let createNewUser = async (req, res) => {
  console.log("Check req:", req.body);
  let { id, firstName, lastName, email, address } = req.body;
  await pool.execute(
    "Insert into users(id,firstName,lastName,email,address) values (?,?,?,?,?)",
    [id, firstName, lastName, email, address]
  );
  return res.redirect("/");
};
export default { getHomePage, getDetailpage, createNewUser };
