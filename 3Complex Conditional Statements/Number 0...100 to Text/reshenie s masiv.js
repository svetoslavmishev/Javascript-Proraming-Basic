function NumberToText([num]) {
    num = Number(num);
    var fromOnetoNineteen = ["one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    var fromTwenty = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num >= 1 && num <= 19) {
        console.log(fromOnetoNineteen[num - 1]); // [0] достъпваме първия елемент от масива, който започва с нулев индекс.
    } else if (num >= 20 && num < 100) {
        if (num % 10 == 0) {
            console.log(fromTwenty[num / 10 - 2]); // [0] i "ten"
        } else {
            console.log(fromTwenty[Math.floor(num / 10 - 2)] + " " + fromOnetoNineteen[num % 10 - 1]);
        }
    } else if (num == 100) {
        console.log("one hundred");
    } else if (num == 0) {
        console.log("zero");
    } else if (num > 100 || num < 0) {
        console.log("Invalid number");
    }
}
NumberToText(["47"]);