const express = require("express")

const app = express()
//导入路由模块
const router = require("./router.js")
//加载模块
app.use("/profiles",router)

app.listen(80, function(){
    console.log("Server is running on http://localhost")
})