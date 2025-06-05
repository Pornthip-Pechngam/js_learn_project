//เป็นการสร้าง module แบบ ES module
import mo1 from './sau-module01.js' //export default
import { dataX1, SAU1, showWow1 } from './sau-module02.js'; //export รายตัว

console.log(mo1.SAU);
console.log(mo1.dataX);
mo1.showWow()
//-----------------------------
console.log(dataX1);
console.log(SAU1);
showWow1();

