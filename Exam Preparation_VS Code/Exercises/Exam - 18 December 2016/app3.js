function flowers([arg1, arg2, arg3, arg4, arg5]) {
    let hrizantemi = Number(arg1);
    let roses = Number(arg2);
    let laleta = Number(arg3);
    let season = arg4.toLowerCase();
    let holidayOrNot = arg5.toLowerCase();
    let priceHrizantemi = 0;
    let priceRoses = 0;
    let priceLaleta = 0;
    let totoalPrice = 0;
    if (season == "spring" || season == "summer") {
        priceHrizantemi = 2;
        priceLaleta = 2.5;
        priceRoses = 4.10;
        totoalPrice = priceHrizantemi * hrizantemi + priceLaleta * laleta + priceRoses * roses;
    } else if (season == "autumn" || season == "winter") {
        priceHrizantemi = 3.75;
        priceLaleta = 4.15;
        priceRoses = 4.50;
        totoalPrice = priceHrizantemi * hrizantemi + priceLaleta * laleta + priceRoses * roses
    }
    if (holidayOrNot == "y") {
        totoalPrice = totoalPrice * 1.15;
        if (laleta > 7 && season == "spring") {
            totoalPrice = totoalPrice * 0.95;
        } else if (roses >= 10 && season == "winter") {
            totoalPrice = totoalPrice * 0.9;
        }
    } else if (holidayOrNot == "n") {
        if (laleta > 7 && season == "spring") {
            totoalPrice = totoalPrice * 0.95;
        } else if (roses >= 10 && season == "winter") {
            totoalPrice = totoalPrice * 0.9;
        }
    }
    if (roses + hrizantemi + laleta > 20) {
        totoalPrice = totoalPrice * 0.8;
    }
    console.log((totoalPrice + 2).toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);