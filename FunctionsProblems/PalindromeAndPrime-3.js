function prime(number) {
    let count = 0;
    for (let num = 2; num < number; num++) {
        if (number % num == 0) {
            count = 1;
        }
    }
    if (count == 0) {
        return number;
    } else {
        return 0;
    }
}

function palindrome(number) {
    let temp = number;
    let num = number;
    let sum = 0;
    let remainder = 0;
    while (num > 0) {
        remainder = parseInt(num % 10);
        sum = parseInt(sum * 10 + remainder);
        num = parseInt(num / 10);
    }
    if (sum == number) {
        return number;
    } else {
        return 0;
    }
}
let number = window.prompt("Enter a number: ");
if (prime(number) != 0) {
    if (palindrome(number) != 0) {
        alert(number + " and it's palindrome are prime");
    } else {
        alert("Number is either not palindrome or palindrome is not prime");
    }
} else {
    alert("Number is not prime");
}