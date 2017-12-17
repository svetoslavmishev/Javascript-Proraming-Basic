function moneyAward(args) {
    let projectParts = Number(args[0]);
    let moneyAward = Number(args[1]);
    let bonusPoints = 0;
    let sumOfPoints = 0;
    for (let i = 1; i <= args.length - 2; i++) {
        let currentPoints = Number(args[i + 1]);
        if (i % 2 == 0) {
            bonusPoints = currentPoints * 2;
        } else {
            bonusPoints = currentPoints;
        }
        sumOfPoints += bonusPoints;
    }
    console.log(`The project prize was ${(moneyAward * sumOfPoints).toFixed(2)} lv.`);
}
moneyAward(["7", "100.5", "2", "4", "5", "1", "1", "7", "3"]);