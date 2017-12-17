function equalNumbers([arg1, arg2, arg3]) {
    let firstNumber = Number(arg1);
    let secondNumber = Number(arg2);
    let thirdNumber = Number(arg3);
    if (firstNumber == secondNumber && firstNumber == thirdNumber) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalNumbers(["1", "2", "3"]);
equalNumbers(["5", "5", "5"]);