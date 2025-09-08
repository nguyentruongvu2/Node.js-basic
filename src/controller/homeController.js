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
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [3]);

        const data = rows.map((row) => ({
            id: row.id,
            email: row.email,
            address: row.address,
            fristName: row.firstName,
            lastName: row.lastName,
        }));

        console.log("data inside:", data);

        return res.render("index.ejs", { dataUser: JSON.stringify(data) });
    } catch (err) {
        console.error("Lỗi MySQL:", err);
        return res.status(500).send("Lỗi server!");
    }
};

export default getHomePage;
