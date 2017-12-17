function logistic(args) {
    let numberTovari = Number(args[0]);
    let priceBus = 0;
    let totalTonsBus = 0;
    let priceVehichle = 0;
    let totalTonsVehichle = 0;
    let priceTrain = 0;
    let totalTonsTrain = 0;
    for (let i = 1; i <= numberTovari; i++) {
        let currentTovar = Number(args[i]);
        if (currentTovar <= 3) {
            priceBus += currentTovar * 200;
            totalTonsBus += currentTovar;
        }
        if (currentTovar >= 4 && currentTovar <= 11) {
            priceVehichle += currentTovar * 175;
            totalTonsVehichle += currentTovar;
        }
        if (currentTovar >= 12) {
            priceTrain += currentTovar * 120;
            totalTonsTrain += currentTovar;
        }
    }
    let totalTons = totalTonsTrain + totalTonsVehichle + totalTonsBus;
    let averagePerTon = priceBus + priceTrain + priceVehichle;
    console.log((averagePerTon / totalTons).toFixed(2));
    console.log((totalTonsBus / totalTons * 100).toFixed(2) + "%");
    console.log((totalTonsVehichle / totalTons * 100).toFixed(2) + "%");
    console.log((totalTonsTrain / totalTons * 100).toFixed(2) + "%");
}
logistic(["4", "1", "5", "16", "3"]);
logistic(["5", "2", "10", "20", "1", "7"]);