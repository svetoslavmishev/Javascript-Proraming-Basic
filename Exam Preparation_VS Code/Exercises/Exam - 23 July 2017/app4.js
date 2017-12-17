function energyLoss(args) {
    let numberTrainingDays = Number(args[0]);
    let numberDancers = Number(args[1]);
    let startEnergy = 100 * numberTrainingDays * numberDancers;
    let firstLossEnergy = 0;
    let secondLossEnergy = 0;
    let thirdLossEnergy = 0;
    let fourthLossEnergy = 0;
    let countDay = 0;
    for (let i = 1; i <= numberTrainingDays; i++) { // може (let i = 2; i <= args.length; i++), no w judje ima edin prazen red w masiwa, koeto e gre[ka]
        let currentHours = Number(args[i+1]);
        countDay++;
        if (currentHours % 2 == 0 && countDay % 2 == 0) {
            firstLossEnergy += 68 * numberDancers;
        }
        if (currentHours % 2 == 0 && countDay % 2 != 0) {
            secondLossEnergy += 49 * numberDancers;
        }
        if (currentHours % 2 != 0 && countDay % 2 == 0) {
            thirdLossEnergy += 65 * numberDancers;
        }
        if (currentHours % 2 != 0 && countDay % 2 != 0) {
            fourthLossEnergy += 30 * numberDancers;
        }
    }
    let total = startEnergy - (firstLossEnergy + secondLossEnergy + thirdLossEnergy + fourthLossEnergy);
    let totoalEnergyPerDancer = (total / numberDancers / numberTrainingDays).toFixed(2); 
    if (totoalEnergyPerDancer >= 50) {
        console.log(`They feel good! Energy left: ${totoalEnergyPerDancer}`);
    } else {
        console.log(`They are wasted! Energy left: ${totoalEnergyPerDancer}`);
    }    
}
energyLoss(["4", "10", "5", "8", "2", "3"]);
energyLoss(["4", "10", "1", "1", "1", "1"]);