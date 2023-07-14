const fs = require("fs")

// 同一级是./  上一级是../
fs.writeFile("./files/2.txt", "Happy note", function(err) {
    //如果写入成功，err null。写入失败，err是个对象
    // if(err) {
    //     return console.log("err",err)
    // }
    // console.log("write file succeed")
    if(err) {
        console.log("err",err)
    }else {
        console.log("write file succeed")
    }
})