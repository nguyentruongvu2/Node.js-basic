import pool from "../configs/connectDB.js";
let getAllUser = async (req, res) => {
  const [rows, fields] = await pool.query("SELECT * FROM users ");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "Missing data",
    });
  }
  await pool.execute(
    "Insert into users(firstName,lastName,email,address) values (?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let updateUser = async (req, res) => {
  let { id, firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      message: "Missing data",
    });
  }
  await pool.execute(
    "update users set firstName=?, lastName=?, email=?, address=? where id=?",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(200).json({
      message: "Missing data",
    });
  }
  await pool.execute("delete from users where id = ?", [userId]);
  return res.status(200).json({
    message: "ok",
  });
};
export default { getAllUser, createNewUser, updateUser, deleteUser };
