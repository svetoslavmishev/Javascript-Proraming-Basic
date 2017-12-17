function charity([arg1, arg2, arg3, arg4, arg5]) {
    let numberOfDaysForCharity = Number(arg1);
    let numberOfCooks = Number(arg2);
    let numberOfCackes = Number(arg3);
    let numberOfWaffles = Number(arg4);
    let numberOfPancakes = Number(arg5);
    let moneyCackes = numberOfCackes * 45;
    let moneyWaffles = numberOfWaffles * 5.8;
    let moneyPancakes = numberOfPancakes * 3.20;
    let totalMoneyPerDayOfCook = (moneyCackes + moneyPancakes + moneyWaffles) * numberOfCooks;
    let totalMoney = totalMoneyPerDayOfCook * numberOfDaysForCharity;
    let moneyForCharity = totalMoney / 8;
    console.log((totalMoney - moneyForCharity).toFixed(2));
}
charity(["20", "8", "14", "30", "16"]);
charity(["131", "5", "9", "33", "46"]);