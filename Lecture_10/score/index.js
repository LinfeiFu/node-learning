//导入fs模块
const fs = require ("fs")
//读取文件： read score.txt
fs.readFile("./score.txt", "utf8", function(err,data){
    //判断是否读取成功
    if(err){
        return console.log("read file failed", err.message)
    }
    console.log("read file succeed", typeof data)
    //成绩按空格进行分割
    const arr = data.split(" ")
    console.log("arr", arr)
    //[ 'Ben=99', 'Jane=100', 'John=80', 'Chris=66', 'Andrew=88' ]
    //循环，对每一项数据进行字符串替换
    const arrNew = []
    arr.forEach(function(item){
        arrNew.push(item.replace("=", ":"))
    })
    console.log("arrNew", arrNew)
    //把新数组的每一项进行合并，得到一个新的string
    //在windows里，\r\n就是回车换行的意思
    const newString = arrNew.join("\r\n")
    console.log("newStr", newString)
    //写入新的文件
    fs.writeFile("./updatedScore.txt",newString, function(err){
        if(err){
            return console.log("write file failed", err.message)
        }
        console.log("write file succeed!")
    })
})