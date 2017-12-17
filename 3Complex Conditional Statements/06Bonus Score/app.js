function scoreCalculator([arg1]) {
    let num = Number(arg1);
    let bonusPoints = 0;
    if (num <= 100) {
        bonusPoints = 5;
    } else if (num > 1000) {
        bonusPoints = 0.1 * num;
    } else if (num > 100) {
        bonusPoints = 0.2 * num;
    }
    if (num % 2 == 0) {
        bonusPoints += 1;
    } else if (num % 10 == 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(num + bonusPoints);
}
scoreCalculator(["20"]);
scoreCalculator(["175"]);
scoreCalculator(["2703"]);
scoreCalculator(["15875"]);

/*
20	6
26
175	37
212
2703	270.3
2973.3
15875	1589.5
17464.5
*/