function bikeRace([arg1, arg2, arg3]) {
    let numberJuniorBikers = Number(arg1);
    let numberSeniorBikers = Number(arg2);
    let trase = arg3.toLowerCase();
    let priceJunior = 0;
    let priceSenior = 0;
    if (numberJuniorBikers > 0) {
        if (trase == "trail") {
            priceJunior = 5.5;
        } else if (trase == "cross-country") {
            priceJunior = 8;
            if (numberJuniorBikers + numberSeniorBikers >= 50) {
                priceJunior = 8 * 0.75;
            }
        } else if (trase == "downhill") {
            priceJunior = 12.25;
        } else if (trase == "road") {
            priceJunior = 20;
        }
    }
    if (numberSeniorBikers > 0) {
        if (trase == "trail") {
            priceSenior = 7;
        } else if (trase == "cross-country") {
            priceSenior = 9.50;
            if (numberJuniorBikers + numberSeniorBikers >= 50) {
                priceSenior = 9.5 * 0.75;
            }
        } else if (trase == "downhill") {
            priceSenior = 13.75;
        } else if (trase == "road") {
            priceSenior = 21.50;
        }
    }
    let totalMoney = priceJunior * numberJuniorBikers + priceSenior * numberSeniorBikers;
    console.log((totalMoney * 0.95).toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["20", "25", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);

