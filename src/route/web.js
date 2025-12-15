import express from "express";
import homeController from "../controller/homeController.js";
// import getHomePage from "../controller/homeController"
// import getDetailpage from "../controller/homeController"
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/students", homeController.createNewUser);
  router.get("/detail/students/:id", homeController.getDetailpage);
  router.post("/delete-students", homeController.deleteUser);
  router.get("/edit-students/:id", homeController.getEditPage);
  router.post("/update-students", homeController.postUpdateUser);
  return app.use("/", router);
};
export default initWebRoute;
