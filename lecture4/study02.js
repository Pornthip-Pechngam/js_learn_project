////เรียกใช้งาน module แบบ CommonJS
const { dataX, showWow } = require('./my-module01');

const {sumNumber} = require('./my-module02');

console.log(dataX);
showWow();
console.log(sumNumber(10,20));