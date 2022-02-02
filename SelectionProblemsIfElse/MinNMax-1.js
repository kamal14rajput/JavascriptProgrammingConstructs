let rnum1 = Math.floor(Math.random()*900) + 100;
let rnum2 = Math.floor(Math.random()*900) + 100;
let rnum3 = Math.floor(Math.random()*900) + 100;
let rnum4 = Math.floor(Math.random()*900) + 100;
let rnum5 = Math.floor(Math.random()*900) + 100;

let max = rnum1;

if (rnum1 < rnum2){
    max = rnum2;
}
if (rnum2 < rnum3){
    max = rnum3;
}
if (rnum3 < rnum4){
    max = rnum4;
}
else{
    max = rnum5;
}

console.log("Maximum Number is:"+max);