function cups([arg1, arg2, arg3]) {
    let numberCupsToProduce = Number(arg1);
    let numberWorkers = Number(arg2);
    let daysForWorking = Number(arg3);
    let hoursForWorkingPerDay = 8;
    let timeForCup = 5;
    let priceForCup = 4.20;
    let totalTime = daysForWorking * numberWorkers * hoursForWorkingPerDay;
    let totalCups = Math.floor(totalTime / timeForCup);
    if (totalCups < numberCupsToProduce) {
        console.log(`Losses: ${(Math.abs(totalCups - numberCupsToProduce) * priceForCup).toFixed(2)}`);
    } else {
        console.log(`${((totalCups - numberCupsToProduce) * priceForCup).toFixed(2)} extra money`);
    }
}
cups(["500", "8", "20"]);
cups(["150", "7", "18"]);