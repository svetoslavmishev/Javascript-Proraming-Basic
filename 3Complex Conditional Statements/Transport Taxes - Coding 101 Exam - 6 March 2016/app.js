function transportTax([arg1, arg2]) {
    let kilometres = Number(arg1);
    let dayOrNight = arg2;
    let lowprice = 0;
    if (kilometres >= 1 && kilometres < 20 && dayOrNight == "day") {
        lowPrice = 0.7 + (0.79 * kilometres);
    } else if (kilometres >= 1 && kilometres < 20 && dayOrNight == "night") {
        lowPrice = 0.7 + (0.90 * kilometres);
    } else if (kilometres >= 20 && kilometres < 100) {
        lowPrice = kilometres * 0.09;
    } else if (kilometres >= 100 && kilometres < 5000) {
        lowPrice = kilometres * 0.06;
    }
    console.log(lowPrice.toFixed(2));
}
transportTax(["5", "day"]);
transportTax(["7", "night"]);
transportTax(["25", "day"]);
transportTax(["180", "night"]);