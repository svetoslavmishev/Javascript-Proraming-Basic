function styrofoam([arg1, arg2, arg3, arg4, arg5]) {
    let budget = Number(arg1);
    let houseArea = Number(arg2);
    let numberWindows = Number(arg3);
    let styrofoamPerPackage = Number(arg4);
    let pricePerPackage = Number(arg5);
    let windowsArea = numberWindows * 2.4;
    let totalHouseArea = houseArea - windowsArea;
    let houseAreaPlusFira = totalHouseArea * 1.1;
    let neededPackage = Math.ceil(houseAreaPlusFira / styrofoamPerPackage);
    let money = neededPackage * pricePerPackage;
    if (budget > money) {
        console.log(`Spent: ${money.toFixed(2)}`);
        console.log(`Left: ${(budget - money).toFixed(2)}`);
    } else {
        console.log(`Need more: ${(money - budget).toFixed(2)}`);
    }
}
styrofoam(["500", "200", "5", "20", "30"]);
styrofoam(["190.9", "250.50", "2", "24.6", "32.60"]);