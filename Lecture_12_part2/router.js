const express = require("express")
//创建路由模块
const router = express.Router()

let users = [
    {name:"Ben", age:"20"},
    {name:"John", age:"30"},
    {name:"Chris", age:"45"},
    {name:"Jane", age:"35"},
]
//get user list  /api/users
router.get("/users", function (req, res) {
    res.send({
        status:0,
        msg:"get users succeed",
        data:users
    })
})


//post user/api/user
router.post("/user", function(req,res){ 
    const user = req.body;
    console.log("user",user)
    users.push(user)
    res.send({
        msg:"Post user succeed",
        data:users,
    })
})

//delete list  /api/delete
router.delete("/delete", function(req,res){
    users = [];
    res.send({
        status:0,
        msg:"Delete users succeed",
        data:users
    })
})


module.exports = router