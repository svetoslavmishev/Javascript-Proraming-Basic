function fibonachi([arg1]) {
    let n = Number(arg1);
    let firstNumber = 1;
    let secondNumber = 1;

    for (let i = 0; i < n; i++) {
        let oldSecondNumber = secondNumber;
        secondNumber = firstNumber + secondNumber;
        firstNumber = oldSecondNumber;
    }
    console.log(firstNumber);
}
fibonachi(["0"]);
fibonachi(["1"]);
fibonachi(["2"]);
fibonachi(["5"]);
fibonachi(["10"]);