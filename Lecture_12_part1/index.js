const express = require("express")
const app = express()
//npm init
//npm i express
//npm i nodemon -D
//npx nodemon index.js (自动更新)
//把目录下所有文件提供为静态资源，但是public目录不会出现在url里
//托管多个静态页面资源，如果目录下文件名一样，会执行第一个找到的文件
//http://localhost/1.html
app.use(express.static("./files"))
app.use(express.static("./public"))
app.listen(80, function(){
    console.log("server is running on http://localhost")
})