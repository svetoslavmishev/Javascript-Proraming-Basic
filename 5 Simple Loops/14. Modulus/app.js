function modulus(args) {
    let n = Number(args[0]);
    let point2 = 0;
    let point3 = 0;
    let point4 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if (currentNumber % 2 == 0) {
            point2 += 1;
        }
        if (currentNumber % 3 == 0) {
            point3 += 1;
        }
        if (currentNumber % 4 == 0) {
            point4 += 1;
        }
    }
    console.log((point2 / n * 100).toFixed(2) + "%");
    console.log((point3 / n * 100).toFixed(2) + "%");
    console.log((point4 / n * 100).toFixed(2) + "%");
}
//modulus(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
modulus(["3", "3", "6", "9"]);