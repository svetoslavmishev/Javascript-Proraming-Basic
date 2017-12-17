function rentCar([arg1, arg2]) {
    let budget = Number(arg1);
    let season = arg2;
    let carClass = "";
    let carModel = "";
    let carPrice = 0;
    if (budget >= 10) {
        if (budget <= 100) {
            carClass = "Economy class";
            if (season == "Summer") {
                carModel = "Cabrio";
                carPrice = budget * 0.35;
            } else if (season == "Winter") {
                carModel = "Jeep";
                carPrice = budget * 0.65;
            }
        }
        if (budget > 100 && budget <= 500) {
            carClass = "Compact class";
            if (season == "Summer") {
                carModel = "Cabrio";
                carPrice = budget * 0.45;
            } else if (season == "Winter") {
                carModel = "Jeep";
                carPrice = budget * 0.80;
            }
        } 
        if (budget > 500) {
            carClass = "Luxury class";
            carModel = "Jeep";
            carPrice = budget * 0.90;
        }
        console.log(`${carClass}`);
        console.log(`${carModel} - ${carPrice.toFixed(2)}`);
    }
}
rentCar(["450", "Summer"]);
rentCar(["450", "Winter"]);
rentCar(["1010", "Summer"]);
rentCar(["1010", "Winter"]);
rentCar(["99.99", "Summer"]);
rentCar(["70.50", "Winter"]);