import express from "express"
const ConfigViewEngine = (app) => {
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
}
export default ConfigViewEngine