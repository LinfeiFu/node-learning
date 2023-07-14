//npm init
//npm i express moment 
//npm i nodemon -D
const express = require("express")
//创建server
const app = express()

//定义一个最简单的中间件函数 middleware
const mw = function (req, res, next) {
    console.log("this is a middleware function")
    next()
}

//讲mw注册为全局生效的中间件
app.use(mw)

app.use(function(req,res,next){
    console.log("this is the second middleware function")
    next()
})

app.get("/", function (req, res){
    console.log("home page")
    res.send("Home page")
})

app.get("/user", function (req, res) {
    console.log("user page")
    res.send("User page")
})

app.listen(8080), function() {
    console.log("server is running on http://127.0.0.1:8080")
}
