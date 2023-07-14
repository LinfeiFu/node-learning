// npm i express
const express = require("express")
//创建web服务器app
 const app = express()

 //监听客户端的get，post请求，并向客户端响应具体内容
 app.get("/user", function(req,res){
    res.send({name:"Chris", age:20, gender:"male"})
 })

 app.get("/food", function(req,res){
   console.log("query", req.query)
   //req.query可以获取客户端发送过来的查询参数
   res.send(req.query)
 })

 app.get("/users/:room/:name", function(req,res){
   //:room是一个动态参数
   console.log("room", req.params.room)
   console.log("name", req.params.name)
   res.send(req.params)
 })

 app.post("/user", function(req, res){
   res.send("Request succeed!")
 })

 app.listen(80, function(){
    console.log("Server is running on http://localhost")
 })
 //http://127.0.0.1