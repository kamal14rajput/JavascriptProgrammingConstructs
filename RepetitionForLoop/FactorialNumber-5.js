const promt = require('prompt-sync')({sigint:true});
let num = promt('enter a number:');
let factorial = 1;
for(i = 1;i <= num;i++){
    factorial = factorial * i;
}
console.log(factorial);