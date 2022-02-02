const promt = require("prompt-sync")({sigint:true});

let a = parseInt(promt("enter first number:"));
let b = parseInt(promt("enter second number:"));
let c = parseInt(promt("enter third number:"));

let res1 = a + b * c;
let res2 = a % b + c;
let res3 = c + a / b;
let res4 = a * b + c;

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);