const prompt = require('prompt-sync')();
const num = prompt("Enter Number for week ");
if(num == 1){
    console.log("Monday");
}
else if(num == 2){
    console.log("Tues");
}
else if(num == 3){
    console.log("Wen");
}
else if(num == 4){
    console.log("Thur");
}
else if(num == 5){
    console.log("Fri");
}
else if(num == 6){
    console.log("Sat");
}
else if(num == 7){
    console.log("Sun");
}
else{
    console.log("??");
}