function peshoIsAlchoholic([arg1, arg2, arg3, arg4, arg5,]) {
    let whiskeyPriceLevsLitres = Number(arg1);
    let beerQuantity = Number(arg2);
    let wineQuantity = Number(arg3);
    let rakiaQuantity = Number(arg4);
    let whiskeyQuantity = Number(arg5);
    let rakiaPrice = whiskeyPriceLevsLitres / 2;
    let winePrice = rakiaPrice - rakiaPrice * 0.4;
    let beerPrice = rakiaPrice - rakiaPrice * 0.8;
    let total = whiskeyQuantity * whiskeyPriceLevsLitres + wineQuantity * winePrice +
        beerQuantity * beerPrice + rakiaQuantity * rakiaPrice;
    console.log(total.toFixed(2));
}
peshoIsAlchoholic(["50", "10", "3.5", "6.5", "1"]);
peshoIsAlchoholic(["63.44", "3.57", "6.35", "8.15", "2.5"]);