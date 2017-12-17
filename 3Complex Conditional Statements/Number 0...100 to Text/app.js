function NumberToText([arg1]) {
    let num = Number(arg1);
    let units = "";
    let tens = "";
    let tensAndUnits = "";
    let firstNumber = parseInt(num / 10);
    let secondNumber = Number(num % 10);
    let bothNumber = Number(num);

    switch (secondNumber) {
        case 0:
            units = "zero";
            break;
        case 1:
            units = "one";
            break;
        case 2:
            units = "two";
            break;
        case 3:
            units = "three";
            break;
        case 4:
            units = "four";
            break;
        case 5:
            units = "five";
            break;
        case 6:
            units = "six";
            break;
        case 7:
            units = "seven";
            break;
        case 8:
            units = "eight";
            break;
        case 9:
            units = "nine";
            break;
        default:
            break;
    }
    switch (bothNumber) {
        case 10:
            tensAndUnits = "ten";
            break;
        case 11:
            tensAndUnits = "eleven";
            break;
        case 12:
            tensAndUnits = "twelve";
            break;
        case 13:
            tensAndUnits = "thirteen";
            break;
        case 14:
            tensAndUnits = "fourteen";
            break;
        case 15:
            tensAndUnits = "fifteen";
            break;
        case 16:
            tensAndUnits = "sixteen";
            break;
        case 17:
            tensAndUnits = "seventeen";
            break;
        case 18:
            tensAndUnits = "eighteen";
            break;
        case 19:
            tensAndUnits = "nineteen";
            break;
        default:
            break;
    }
    switch (firstNumber) {
        case 2:
            tens = "twenty";
            break;
        case 3:
            tens = "thirty";
            break;
        case 4:
            tens = "forty";
            break;
        case 5:
            tens = "fifty";
            break;
        case 6:
            tens = "sixty";
            break;
        case 7:
            tens = "seventy";
            break;
        case 8:
            tens = "eighty";
            break;
        case 9:
            tens = "ninety";
            break;
        default:
            break;
    }
    if (num >= 0 && num <= 9) {
        console.log(units);
    } else if (num >= 10 && num <= 19) {
        console.log(tensAndUnits);
    } else if (num >= 20 && num <= 100) {
        if (num % 10 == 0 && num != 10 && num != 100) {
            console.log(tens);
        } else if (num == 100) {
            console.log("one hundred");
        } else {
            console.log(`${tens} ${units}`);
        }
    } else if (num < 0 || num > 100) {
        console.log("invalid number");
    }
}
NumberToText(["0"]);
NumberToText(["7"]);
NumberToText(["16"]);
NumberToText(["10"]);
NumberToText(["20"]);
NumberToText(["59"]);
NumberToText(["100"]);
NumberToText(["-1"]);
NumberToText(["101"]);