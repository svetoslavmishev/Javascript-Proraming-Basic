function equalPairs(args) {
    let n = Number(args[0]) * 2;
    let currentSum = 0;
    let max = 0;

    for (i = 1; i <= n - 2; i += 2) {
        let firstSum = Number(args[i]) + Number(args[i + 1]);
        let nextSum = Number(args[i + 2]) + Number(args[i + 3]);
        currentDiff = Math.abs(firstSum - nextSum);
        if (currentDiff > max) {
            max = currentDiff;
        }
    }
    if (i == 1 || currentDiff == 0) {
        console.log(`Yes, value=${Number(args[1]) + Number(args[2])}`);
    } else {
        console.log("No, maxdiff=" + max);
    }
}
//equalPairs(["3", "1", "2", "0", "3", "4", "-1"]); // Yes, value=3
//equalPairs(["2", "-1", "0", "0", "-1"]); // Yes, value=-1/
//equalPairs(["2", "1", "2", "2", "2"]); // No, maxdiff=1
//equalPairs(["2", "-1", "2", "0", "-1"]); // No, maxdiff=2
//equalPairs(["1", "5", "5"]); // Yes, value=10 
//equalPairs(["7", "34", "-33", "52", "12", "-32", "32", "23", "41", "7", "25", "34", "23", "124", "21"]); // No, maxdiff=88
equalPairs(["7", "34", "-33", "52", "12", "-32", "32", "23", "41", "7", "25", "34", "23", "24", "21"]); // No, maxdiff=64
//           0     1      2     3     4       5     6    7      8    9    10     11   12    13   14 
//                    1           64            0           64         32         57          45

//equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
//             0    1    2    3    4    5     6