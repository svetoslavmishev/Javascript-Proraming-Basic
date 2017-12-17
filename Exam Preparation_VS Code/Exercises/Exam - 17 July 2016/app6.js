function stopNumber([arg1, arg2, arg3]) {
    let n = Number(arg1);
    let m = Number(arg2);
    let stopNumber = Number(arg3);
    let result = "";
    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == stopNumber) {
                break;
            }
            result += i + " ";
        }
    }
    console.log(result);
}
stopNumber(["1", "30", "15"]);
// stopNumber(["1", "36", "12"]);
// stopNumber(["20", "1000", "36"]);