const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//定义第一个中间件
const mw1 = function(req, res, next) {
    console.log("fist middleware")
    next()
}

//定义第二个中间件
const mw2 = function(req,res,next) {
    console.log("second middleware")
    next()
}

//mw1这个局部中间件只在当前路由中生效
app.get("/book",mw2,mw1, function(req,res){
    console.log("book page")
    res.send("book page")
})

app.get("/user",[mw1,mw2], function(req, res) {
    console.log("user page")
    res.send("user page")
})

app.post("/user",function(req,res){
    //默认情况下，如果不配置任何解析表单数据的中间件，则req.body是undefined
    console.log("body",req.body)
    res.send ({
        msg:"post succeed",
        data: req.body
    })
})

app.post("/book", function(req,res){
    console.log("body",req.body)
    res.send ({
        msg:"post succeed",
        data: req.body
    })
})

app.listen(8080, function() {
    console.log("server is running on http://127.0.0.1:8080")
})