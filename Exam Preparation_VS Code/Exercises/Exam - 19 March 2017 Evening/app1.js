function grapeAndRakia([arg1, arg2, arg3]) {
    let areaVineyard = Number(arg1);
    let kilogramsPerSqureMetres = Number(arg2);
    let waste = Number(arg3);
    let kilosGrape = areaVineyard * kilogramsPerSqureMetres;
    let totalGrape = kilosGrape - waste;
    let grapesForRakia = totalGrape * 0.45;
    let rakiaInLitres = grapesForRakia / 7.5;
    let graperForSale = totalGrape * 0.55;
    console.log((rakiaInLitres * 9.8).toFixed(2));
    console.log((graperForSale * 1.5).toFixed(2));
}
grapeAndRakia(["400", "10", "200"]);
grapeAndRakia(["1354.73", "8.26", "531.32"]);