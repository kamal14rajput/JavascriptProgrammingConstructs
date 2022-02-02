   
tails = 0;
heads = 0;

while(tails <= 11 && heads <= 11){
    coin = Math.floor(Math.random()*10)%2;
    if (coin == 1){
        heads += 1;
    }else{
        tails += 1;
    }
}
if (heads == 11){
    console.log('head wins')
}else{
    console.log('tail wins')
}