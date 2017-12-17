function harvest([arg1, arg2, arg3, arg4]) {
    let vineyard = Number(arg1);
    let grapes = parseFloat(arg2);
    let wineLitres = Number(arg3);
    let workers = Number(arg4);
    let wineHarvest = (vineyard * grapes) * 0.4;
    let vineProduction = wineHarvest / 2.5;

    if (vineProduction >= wineLitres) {
        console.log("Good harvest this year! Total wine: " + Math.floor(vineProduction) + " liters.");
        console.log(Math.ceil(vineProduction - wineLitres) + " liters left -> " + Math.ceil((vineProduction - wineLitres) / workers) + " liters per person.");
    } else {
        console.log("It will be a tough winter! More " + Math.floor(wineLitres - vineProduction) + " liters wine needed.");
    }
}
harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
harvest(["5000", "5.5", "245", "20"]);
harvest(["4580", "7.8", "599", "19"]);