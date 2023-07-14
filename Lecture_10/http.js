const http = require("http")
//创建一个web服务器实例
const server = http.createServer()
//为服务器绑定request事件，监听客户端请求
// server.on("request", function(req,res){
//     console.log("someone is visiting our server")
//     //客户端url地址
//     const url = req.url
//     //客户端请求method
//     const method = req.method
//     const str = "你好 "+ url + " and request method is " + method
//     console.log("str", str)
//     res.setHeader("Content-Type", "text/html;charset=utf-8")
//     res.end(str)
// })
//根据不同url返回不同html内容
server.on("request",function(req,res){
    const url = req.url
    let content = "<h1>404 not found</h1>"
    if(url === "/" || url === "/index.html"){
        content = "<h1>main page</h1>"
    }else if(url === "/about.html") {
        content = "<h1>about page</h1>"
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    res.end(content)
})

//启动服务器 http://localhost:8080
server.listen(8080, function(){
    console.log("server is running on http://127.0.0.1:8080")
})