function truckDriver([arg1, arg2]) {
    let season = arg1.toLowerCase();
    let kilometersPerMonth = Number(arg2);
    let pricePerKilometers = 0;
    if (kilometersPerMonth <= 5000) {
        if (season == "spring" || season == "autumn") {
            pricePerKilometers = 0.75;
        } else if (season == "summer") {
            pricePerKilometers = 0.90;
        } else if (season == "winter") {
            pricePerKilometers = 1.05;
        }
    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
        if (season == "spring" || season == "autumn") {
            pricePerKilometers = 0.95;
        } else if (season == "summer") {
            pricePerKilometers = 1.10;
        } else if (season == "winter") {
            pricePerKilometers = 1.25;
        }
    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        pricePerKilometers = 1.45;
    }
    let salaryForSeason = pricePerKilometers * kilometersPerMonth * 4;
    console.log((salaryForSeason * 0.9).toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);