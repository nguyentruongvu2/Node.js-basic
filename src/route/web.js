import express from "express"
import getHomePage from "../controller/homeController"
let router = express.Router()

const initWebRoute = (app) => {
    // router.get('/', (req, res) => {
    //     res.render('index.ejs')
    // })

    router.get('/', getHomePage)

    router.get('/about', (req, res) => {
        res.send('Hello bạn! Mình là Vũ')
    })
    return app.use("/", router)
}
export default initWebRoute