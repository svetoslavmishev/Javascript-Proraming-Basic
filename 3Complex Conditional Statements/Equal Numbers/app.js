function equalNumber([arg1, arg2, arg3]) {
    let firstNumber = Number(arg1);
    let seconNumber = Number(arg2);
    let thirdNumber = Number(arg3);
    if (firstNumber == seconNumber && firstNumber == thirdNumber) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalNumber(["3.2", "3.229888", "3.2"]);
equalNumber(["13", "13", "13.0"]);