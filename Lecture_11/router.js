const express = require("express")
//创建路由
const router = express.Router()

//挂载具体路由
router.get("/list", function(req,res){
    res.send("get profile list succeed!")
})

router.post("/profile", function(req,res){
    res.send("add new profile succeed!")
})

//导出路由
module.exports = router