import ConfigViewEngine from "./configs/viewEngine"
import express from "express"
import initWebRoute from "./route/web"

require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000
console.log("check port", port)
// khởi tạo viewEngine
ConfigViewEngine(app)
// khởi tạo router
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
