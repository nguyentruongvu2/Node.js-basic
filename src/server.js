import ConfigViewEngine from "./configs/viewEngine";
import express from "express";
import initWebRoute from "./route/web";
import connection from "./configs/connectDB.js";
import dotenv from "dotenv";
import initAPIRoute from "./route/api.js";
// require("dotenv").config()
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
console.log("check port", port);

// Test kết nối database
connection
  .query("SELECT 1")
  .then(() => console.log("✓ Database connected successfully!"))
  .catch((err) => console.error("✗ Database connection error:", err.message));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// khởi tạo viewEngine
ConfigViewEngine(app);
// khởi tạo router
initWebRoute(app);
// khởi tạo api route
initAPIRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
