var Obj = require('./module.js');

let obj1 = new Obj();
let obj2 = new Obj();

console.log(obj1.increment());
console.log(obj1.increment());
console.log(obj2.increment());
console.log(obj2.increment());
console.log(obj2.increment());
