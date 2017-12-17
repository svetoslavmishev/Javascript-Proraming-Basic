function flowerShop([arg1, arg2, arg3, arg4, arg5]) {
    let magnolii = Number(arg1);
    let ziumbiuli = Number(arg2);
    let roses = Number(arg3);
    let kaktus = Number(arg4);
    let priceOfGift = Number(arg5);
    let priceMagnolii = 3.25;
    let priceRoses = 3.5;
    let priceKaktusi = 8;
    let priceZiumbiuli = 4
    let sum = magnolii * priceMagnolii + roses * priceRoses + kaktus * priceKaktusi + ziumbiuli * priceZiumbiuli;
    let budget = 0.95 * sum;
    if (budget >= priceOfGift) {
        console.log(`She is left with ${Math.floor(budget - priceOfGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(priceOfGift - budget)} leva.`);
    }
}
flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);