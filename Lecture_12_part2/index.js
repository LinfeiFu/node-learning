const express = require("express")
const cors = require("cors")
//创建web服务器
const app = express()
const router = require("./router")
//一定要在路由之前配置cors，从而解决接口跨域问题
app.use(cors())
app.use(express.json())

app.use("/api",router)

const port = 80
app.listen(port, function() {
    console.log("Server is running on http://localhost:80")
})