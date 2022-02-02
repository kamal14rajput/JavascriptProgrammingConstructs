function convertToCelsius(degree) {
    let celsius = (degree - 32) * 5 / 9;
    alert(degree + "F = " + celsius + "C");
}

function convertToFahrenheit(degree) {
    let fahrenheit = degree * 9 / 5 + 32;
    alert(degree + "C = " + fahrenheit + "F");
}

let degree = window.prompt("Enter degree: ");
let conversion = parseInt(window.prompt("Covert to:\n" +
    "1. Celsius\n" +
    "2. Fahrenheit"
));

switch (conversion) {
    case 1:
        convertToCelsius(degree);
        break;
    case 2:
        convertToFahrenheit(degree);
        break;
    default:
        alert("Invalid input");
}