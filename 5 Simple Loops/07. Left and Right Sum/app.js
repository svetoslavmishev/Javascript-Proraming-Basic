function leftAndRightSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i <= n; i++) {
        leftSum += Number(args[i]);
    }
    for (let i = n + 1; i <= n * 2; i++) {
        rightSum += Number(args[i]);
    }
    let sumDifferrence = Math.abs(rightSum - leftSum);
    if (sumDifferrence == 0) {
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log("No, diff = " + sumDifferrence);
    }
}
leftAndRightSum(["2", "10", "90", "60", "40"]);
leftAndRightSum(["2", "90", "9", "50", "50"]);