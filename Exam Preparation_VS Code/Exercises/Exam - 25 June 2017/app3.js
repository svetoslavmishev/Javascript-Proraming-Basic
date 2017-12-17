function cocktails([arg1, arg2, arg3]) {
    let fruit = arg1.toLowerCase();
    let sizeOfCocktail = arg2.toLowerCase();
    let orderedCocktails = Number(arg3);
    let price = 0;
    let discount = 0;
    if (sizeOfCocktail == "small" && fruit == "watermelon") {
        price = 2 * 56;
    } else if (sizeOfCocktail == "small" && fruit == "mango") {
        price = 2 * 36.66;
    } else if (sizeOfCocktail == "small" && fruit == "pineapple") {
        price = 2 * 42.10;
    } else if (sizeOfCocktail == "small" && fruit == "raspberry") {
        price = 2 * 20;
    } else if (sizeOfCocktail == "big" && fruit == "watermelon") {
        price = 5 * 28.70;
    } else if (sizeOfCocktail == "big" && fruit == "mango") {
        price = 5 * 19.60;
    } else if (sizeOfCocktail == "big" && fruit == "pineapple") {
        price = 5 * 24.80;
    } else if (sizeOfCocktail == "big" && fruit == "raspberry") {
        price = 5 * 15.20;
    }
    let priceOfAllOrderedCocktails = price * orderedCocktails;
    if (priceOfAllOrderedCocktails > 1000) {
        discount = priceOfAllOrderedCocktails / 2;
    } else if (priceOfAllOrderedCocktails >= 400 && orderedCocktails <= 1000) {
        discount = priceOfAllOrderedCocktails * 0.15;
    }
    console.log(`${(priceOfAllOrderedCocktails - discount).toFixed(2)} lv.`);
}
cocktails(["Watermelon", "big", "4"]);
cocktails(["Pineapple", "small", "1"]);
cocktails(["Raspberry", "small", "50"]);
cocktails(["Mango", "big", "8"]);