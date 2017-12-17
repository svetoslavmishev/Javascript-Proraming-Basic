function celsiusToFahrenheit([arg1]) {
    let celsius = parseFloat(arg1);
    let fahrenheit = (celsius * 1.8 + 32);
    console.log(Math.round(fahrenheit * 100) / 100);
}
celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);