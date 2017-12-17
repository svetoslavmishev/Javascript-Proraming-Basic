function dailyProfit([arg1, arg2, arg3]) {
    let days = Number(arg1);
    let moneyPerDays = parseFloat(arg2);
    let dollar = parseFloat(arg3);
    let monthPayment = moneyPerDays * days;
    let yearSalary = monthPayment * 12 + monthPayment * 2.5;
    let taxes = yearSalary * 0.25;
    let levs = (yearSalary - taxes) / 365;

    console.log((levs * dollar).toFixed(2));
}
dailyProfit(["21", "75.00", "1.59"]);
dailyProfit(["15", "105", "1.71"]);