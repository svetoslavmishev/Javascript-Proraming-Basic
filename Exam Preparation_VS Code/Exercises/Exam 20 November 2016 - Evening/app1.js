function housePrice([arg1, arg2, arg3]) {
    let smallestRoom = Number(arg1);
    let kitchen = Number(arg2);
    let pricePerSquareMetre = Number(arg3);
    let bathroom = smallestRoom / 2;
    let secondRoom = smallestRoom * 1.1;
    let thirdRoom = secondRoom * 1.1;
    let totolArea = smallestRoom + kitchen + bathroom + secondRoom + thirdRoom;
    let totoalPrice = totolArea * 1.05 * pricePerSquareMetre;
    console.log(totoalPrice.toFixed(2));
}
housePrice(["20", "10", "699.99"]);
housePrice(["13.23", "7.89", "600"]);