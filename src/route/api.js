import express from "express";
import homeController from "../controller/homeController.js";
import APIcontroller from "../controller/APIcontroller.js";
let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/students", APIcontroller.getAllUser);
  router.get("/students/:id", APIcontroller.getDetailUser);
  router.post("/students", APIcontroller.createNewUser);
  router.put("/students/:id", APIcontroller.updateUser);
  router.delete("/students/:id", APIcontroller.deleteUser);
  return app.use("/api", router);
};
export default initAPIRoute;
