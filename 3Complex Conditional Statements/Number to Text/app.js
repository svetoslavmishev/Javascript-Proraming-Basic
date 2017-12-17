function numberToText([arg1]) {
    let num = Number(arg1);
    if (num == 0) {
        console.log("null");
    } else if (num == 1) {
        console.log("one");
    } else if (num == 2) {
        console.log("two");
    } else if (num == 3) {
        console.log("three");
    } else if (num == 4) {
        console.log("four");
    } else if (num == 5) {
        console.log("five");
    } else if (num == 6) {
        console.log("six");
    } else if (num == 7) {
        console.log("seven");
    } else if (num == 8) {
        console.log("eight");
    } else if (num == 9) {
        console.log("nine");
    } else if (num >= 10) {
        console.log("number too big");
    }
}
numberToText(["5"]);
numberToText(["1"]);
numberToText(["9"]);
numberToText(["15"]);
