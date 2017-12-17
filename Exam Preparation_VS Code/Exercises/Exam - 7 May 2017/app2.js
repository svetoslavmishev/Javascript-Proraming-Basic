function toyShop([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let holiday = parseFloat(arg1);
    let numberPuzzle = Number(arg2);
    let numberDolls = Number(arg3);
    let numberBears = Number(arg4);
    let numberMinions = Number(arg5);
    let numberVehicles = Number(arg6);
    let totalNumberOfToys = numberPuzzle + numberDolls + numberBears + numberMinions + numberVehicles;
    let totalPrice = numberPuzzle * 2.60 + numberDolls * 3 + numberBears * 4.10 + numberMinions * 8.20 + numberVehicles * 2;
    let rent = totalPrice * 0.1;
    let profit = totalPrice - rent;
    if (totalNumberOfToys >= 50) {
        totalPrice -= totalPrice * 0.25;
        rent = totalPrice * 0.1;
        profit = totalPrice - rent;
        if (profit >= holiday) {
            console.log(`Yes! ${(profit - holiday).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(holiday - profit).toFixed(2)} lv needed.`);
        }
    } else if (totalNumberOfToys < 50) {
        if (profit >= holiday) {
            console.log(`Yes! ${(profit - holiday).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(holiday - profit).toFixed(2)} lv needed.`);
        }
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);