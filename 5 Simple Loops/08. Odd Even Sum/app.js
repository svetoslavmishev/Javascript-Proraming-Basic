function evenOrOddSum(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i <= n; i += 2) {
        oddSum += Number(args[i]); // 0+10/0+10+60=70
    }
    for (let i = 1; i < n; i += 2) { // не се взима и i <= n защото има 1 събираемо по-малко (zero-based)
        evenSum += Number(args[i + 1]); //0+50/0+50+20=70
    }
    if (evenSum == oddSum) {
        console.log("Yes");
        console.log("Sum = " + evenSum);
    } else {
        let difference = Math.abs(oddSum - evenSum);
        console.log("No");
        console.log("Diff = " + difference);
    }
}
evenOrOddSum(["4", "10", "50", "60", "20"]);
evenOrOddSum(["4", "3", "5", "1", "-2"]);
evenOrOddSum(["3", "5", "8", "1"]);

