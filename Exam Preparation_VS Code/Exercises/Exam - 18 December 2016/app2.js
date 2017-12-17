function changeTiles([arg1, arg2, arg3, arg4, arg5, arg6, arg7]) {
    let budget = Number(arg1);
    let width = Number(arg2);
    let length = Number(arg3);
    let triangleSide = Number(arg4);
    let triangeHeight = Number(arg5);
    let pricePerTile = Number(arg6);
    let pricePerWorker = Number(arg7);
    let area = width * length;
    let areaTiles = triangeHeight * triangleSide / 2;
    let neededTiles = Math.ceil(area / areaTiles);
    let tilesWithBonus = neededTiles + 5;
    let sum = tilesWithBonus * pricePerTile + pricePerWorker;
    if (budget >= sum) {
        console.log(`${(budget - sum).toFixed(2)} lv left.`);
    } else if (budget < sum) {
        console.log(`You'll need ${(sum - budget).toFixed(2)} lv more.`);
    }
}
changeTiles(["500", "3", "2.5", " 0.5", "0.7", "7.80", "100"]);
changeTiles(["1000", "5.55", "8.95", " 0.9", "0.85", "13.99", "321"]);
