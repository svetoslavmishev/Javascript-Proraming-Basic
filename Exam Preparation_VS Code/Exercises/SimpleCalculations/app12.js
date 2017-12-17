function currencyConverter([arg1, arg2, arg3]) {
    let amount = Number(arg1);
    let convertFrom = arg2;
    let convertTo = arg3;
    let bgn = 1;
    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;
    let calculate = 0;
    if (convertFrom == 'BGN' && convertTo == 'USD') {
        calculate = amount / usd;
    } else if (convertFrom == 'BGN' && convertTo == 'EUR') {
        calculate = amount * bgn / eur;
    } else if (convertFrom == 'BGN' && convertTo == 'GBP') {
        calculate = amount * bgn / gbp;
    } else if (convertFrom == 'USD' && convertTo == 'BGN') {
        calculate = amount * usd / bgn;
    } else if (convertFrom == 'USD' && convertTo == 'EUR') {
        calculate = amount * usd / eur;
    } else if (convertFrom == 'USD' && convertTo == 'GBP') {
        calculate = amount * usd / gbp;
    } else if (convertFrom == 'EUR' && convertTo == 'BGN') {
        calculate = amount * eur / bgn;
    } else if (convertFrom == 'EUR' && convertTo == 'USD') {
        calculate = amount * eur / usd;
    } else if (convertFrom == 'EUR' && convertTo == 'GBP') {
        calculate = amount * eur / gbp;
    } else if (convertFrom == 'GBP' && convertTo == 'BGN') {
        calculate = amount * gbp / bgn;
    } else if (convertFrom == 'GBP' && convertTo == 'USD') {
        calculate = amount * gbp / usd;
    } else if (convertFrom == 'GBP' && convertTo == 'EUR') {
        calculate = amount * gbp / eur;
    } else if (convertFrom == convertTo) {
        calculate = amount;
    }
    console.log(`${calculate.toFixed(2)} ${convertTo}`);
}
currencyConverter(["20", "USD", "BGN"]);
currencyConverter(["100", "BGN", "EUR"]);
currencyConverter(["12.35", "EUR", "GBP"]);
currencyConverter(["150.35", "USD", "EUR"]);
currencyConverter(["1500", "USD", "USD"]); 