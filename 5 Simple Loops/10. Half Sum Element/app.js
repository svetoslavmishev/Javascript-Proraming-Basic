function halfSumElement(args) {
    let n = Number(args[0]);
    let sum = 0;
    let maxElement = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        sum += Number(args[i]);
        let currentNumber = Number(args[i]);
        if (currentNumber > maxElement) {
            maxElement = currentNumber;
        }
    }
    if (sum - maxElement == maxElement) {
        console.log("Yes, Sum = " + maxElement);
    } else {
        let difference = maxElement - (sum - maxElement);
        console.log("No, Diff = " + Math.abs(difference));
    }
}
halfSumElement(["7", "3", "4", "1", "1", "2", "12", "1"]);
halfSumElement(["4", "6", "1", "2", "3"]);
halfSumElement(["3", "1", "1", "10"]);
halfSumElement(["3", "5", "5", "1"]);
halfSumElement(["3", "1", "1", "1"]);
