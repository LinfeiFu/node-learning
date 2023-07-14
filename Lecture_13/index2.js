const express = require("express")
const moment = require("moment")
const app = express()

//注册一个全局中间件
app.use(function(req, res, next){
    //获取到request到达server的时间
    const time = moment().format()
    //为req对象挂在自定义属性，从而把时间分享给后面的所有路由
    req.startTime = time
    next()
})

app.get("/",function (req,res) {

    res.send("Home page" + " " + req.startTime)
})

app.get("/user", function (req, res) {
    res.send("User page" + " " + req.startTime)
})

app.listen(8080, function() {
    console.log("server is running on http://127.0.0.1:8080")
})
