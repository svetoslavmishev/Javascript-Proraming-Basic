function numberPyramid([arg1]) {
    let n = Number(arg1);
    let result = "";
    let currentNumber = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += currentNumber + " ";
            currentNumber++;
            if (currentNumber > n) {
                break;
            }
        }
        console.log(result);
        result = "";
        if (currentNumber > n) {
            break;
        }
    }
}
numberPyramid(["1"]);
// numberPyramid(["2"]);
// numberPyramid(["7"]);