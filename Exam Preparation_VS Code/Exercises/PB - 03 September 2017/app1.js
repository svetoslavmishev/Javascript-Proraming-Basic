function tailoringWorkshop([arg1, arg2, arg3]) {
    let numberRectangleTables = Number(arg1);
    let lengthRectangleTables = Number(arg2);
    let widthRectangleTables = Number(arg3);
    let totalAreaCover = numberRectangleTables * (lengthRectangleTables + 0.6) * (widthRectangleTables + 0.6);
    let totalAreaKare = numberRectangleTables * (lengthRectangleTables / 2) * (lengthRectangleTables / 2);
    let priceInDollars = totalAreaCover * 7 + totalAreaKare * 9;
    let priceInLevs = priceInDollars * 1.85;
    console.log(`${priceInDollars.toFixed(2)} USD`);
    console.log(`${priceInLevs.toFixed(2)} BGN`);
}
tailoringWorkshop(["5", "1", "0.5"]);
tailoringWorkshop(["10", "1.20", "0.65"]);