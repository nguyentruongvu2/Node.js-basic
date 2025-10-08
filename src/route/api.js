import express from "express";
import homeController from "../controller/homeController.js";
import APIcontroller from "../controller/APIcontroller.js";
let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", APIcontroller.getAllUser);
  router.post("/create-users", APIcontroller.createNewUser);
  router.put("/update-users", APIcontroller.updateUser);
  router.delete("/delete-users/:id", APIcontroller.deleteUser);
  return app.use("/api/v1/", router);
};
export default initAPIRoute;
