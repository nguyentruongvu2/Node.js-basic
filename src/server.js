import ConfigViewEngine from "./configs/viewEngine"
import express from "express"
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000
ConfigViewEngine(app)
console.log("check port", port)
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('Hello bạn! Mình là Vũ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
