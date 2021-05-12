/*
    nodejs 遵循commonJS规范 分为3个模块
        1.内置的Node.js模块
        2.第三方的Node.js模块
        3.自定义的Node.js模块

*/

//使用内置模块 os
const os = require('os');
console.log(os.hostname())