function gardener([arg1, arg2, arg3, arg4]) {
    let priceVegetables = parseFloat(arg1);
    let priceFruit = parseFloat(arg2);
    let weighVegetables = Number(arg3);
    let weighFruit = Number(arg4);
    let totalPriceLevs = (priceVegetables * weighVegetables) + (priceFruit * weighFruit);

    console.log((totalPriceLevs / 1.94).toFixed(2));
}
gardener(["0.194", "19.4", "10", "10"]);
gardener(["1.5", "2.5", "10", "10"]);