import express from "express"
import homeController from "../controller/homeController.js";
// import getHomePage from "../controller/homeController"
// import getDetailpage from "../controller/homeController"
let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:id', homeController.getDetailpage)
    router.get('/about', (req, res) => {
        res.send('Hello bạn! Mình là Vũ')
    })
    return app.use("/", router)
}
export default initWebRoute