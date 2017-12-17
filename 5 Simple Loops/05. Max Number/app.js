function maxNumber(args) {
    let n = Number(args[0]);
    let max = Number.NEGATIVE_INFINITY; // валидно е също и Number(agrs[1]);
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum > max) {
            max = currentNum;
        }
    }
    console.log(max);
}
maxNumber(["2", "100", "99"]);
maxNumber(["4", "-45", "-20", "7", "99"]);
maxNumber(["2", "-1", "-2"]);