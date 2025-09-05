import ConfigViewEngine from "./configs/viewEngine"
import express from "express"
const app = express()
const port = 3000
ConfigViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('Hello bạn! Mình là Vũ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
