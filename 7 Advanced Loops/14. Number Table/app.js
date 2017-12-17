function numberTable([arg1]) {
    let n = Number(arg1);
    let result = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let num = i + j + 1;
            if (num > n) {
                num = 2 * n - num;
            }
            result += num + " ";
        }
        console.log(result);
        result = "";
    }
}
// numberTable(["2"]);
numberTable(["3"]);
// numberTable(["5"]);