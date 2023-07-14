const express = require("express")
const app = express()
//加一个路径前缀
//http://localhost/user/1.html
//http://localhost/1.html
app.use("/user",express.static("./public"))
app.use(express.static("./files"))

app.listen(80, function(){
    console.log("server is running on http://localhost")
})