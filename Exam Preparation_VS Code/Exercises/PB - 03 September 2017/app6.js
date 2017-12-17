function profit([arg1, arg2, arg3, arg4]) {
    let numberCoins1 = Number(arg1);
    let numberCoins2 = Number(arg2);
    let numberPaper5 = Number(arg3);
    let sum = Number(arg4);
    let result = "";
    for (let i = 0; i <= numberCoins1; i++) {
        for (let j = 0; j <= numberCoins2; j++) {
            for (let k = 0; k <= numberPaper5; k++) {
                if (i * 1 + j * 2 + k * 5 == sum) {
                    result += "" + i + j + k + " ";
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit("3", "2", "3", "10");
// profit("5", "3", "1", "7");