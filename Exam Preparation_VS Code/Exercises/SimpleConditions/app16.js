function numbersToText([arg1]) {
    let num = Number(arg1);
    let result = "";
    let arrayNumbersoTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "forteeen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let firstNumber = parseInt(num / 10);
    let secondNumber = num % 10;
    if (num > 0 && num < 100) {
        if (num >= 20) {
            console.log(tens[firstNumber] + " " + arrayNumbersoTwenty[secondNumber]);
        } else if (num < 20) {
            console.log(arrayNumbersoTwenty[num]);
        } else if (num % 10 == 0 && firstNumber < 10) {
            console.log(tens[num]);
        }
    } else {
        console.log("hundred");
    }
}
numbersToText(["2"]);
numbersToText(["13"]);
numbersToText(["14"]);
numbersToText(["45"]);
numbersToText(["66"]);
numbersToText(["20"]);
numbersToText(["30"]);
numbersToText(["100"]);