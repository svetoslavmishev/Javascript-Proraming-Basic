function currencyConverter([arg1, arg2, arg3]) {
    let a = Number(arg1);
    let b = arg2;
    let c = arg3;
    let BGN = 1;
    let USD = 1.79549;
    let EUR = 1.95583;
    let GBP = 2.53405;
    if (b == "BGN" & c == "USD") {
        console.log((a * BGN / USD).toFixed(2) + " " + c);
    }
    else if (b == "BGN" & c == "EUR") {
        console.log((a * BGN / EUR).toFixed(2) + " " + c);
    }
    else if (b == "BGN" & c == "GBP") {
        console.log((a * BGN / GBP).toFixed(2) + " " + c);
    }
    else if (b == "USD" & c == "EUR") {
        console.log((a * USD / EUR).toFixed(2) + " " + c);
    }
    else if (b == "USD" & c == "GBP") {
        console.log((a * USD / GBP).toFixed(2) + " " + c);
    }
    else if (b == "USD" & c == "BGN") {
        console.log((a * USD / BGN).toFixed(2) + " " + c);
    }
    else if (b == "EUR" & c == "GBP") {
        console.log((a * EUR / GBP).toFixed(2) + " " + c);
    }
    else if (b == "EUR" & c == "USD") {
        console.log((a * EUR / USD).toFixed(2) + " " + c);
    }
    else if (b == "EUR" & c == "BGN") {
        console.log((a * EUR / BGN).toFixed(2) + " " + c);
    }
    else if (b == "GBP" & c == "EUR") {
        console.log((a * GBP / EUR).toFixed(2) + " " + c);
    }
    else if (b == "GBP" & c == "USD") {
        console.log((a * GBP / USD).toFixed(2) + " " + c);
    }
    else if (b == "GBP" & c == "BGN") {
        console.log((a * GBP / BGN).toFixed(2) + " " + c);
    }
}
currencyConverter(["20", "USD", "BGN"]);
currencyConverter(["100", "BGN", "EUR"]);
currencyConverter(["12.35", "EUR", "GBP"]);
currencyConverter(["150.35", "USD", "EUR"]);
