//导入fs模块
//读取成功，err为null
//读取失败，data为undefined，err为对象
const fs = require("fs")
fs.readFile("./files/1.txt", "utf-8", function(err, data){
    if(err) {
       return console.log("err",err)
    } 
    console.log("data", data)
    })