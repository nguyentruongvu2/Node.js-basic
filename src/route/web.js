import express from "express";
import homeController from "../controller/homeController.js";
// import getHomePage from "../controller/homeController"
// import getDetailpage from "../controller/homeController"
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/create-new-user", homeController.createNewUser);
  router.get("/detail/user/:id", homeController.getDetailpage);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  router.get("/about", (req, res) => {
    res.send("Hello bạn! Mình là Vũ");
  });
  return app.use("/", router);
};
export default initWebRoute;
