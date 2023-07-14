//创建package.json
//npm Infinity

//安装所有的包和个别的包
//npm install, npm i
//npm i moment

//npm i nodemon -D  devDependency
//npm i nodemon --save-dev

const moment = require("moment")
const dt = moment().format("YYYY-MM-D hh:mm:ss")

console.log("dt", dt)