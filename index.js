console.log('helloNode');
console.log('helloNode');
console.log('helloNode');
function add(a, b) {
    console.log(a + b);
}
add(1, 2);//使用 nodemon 运行文件实时监听文件变化

const os = require('os');
console.log(os.hostname())
const hello = require('./src/greeting.js');
hello.hello();