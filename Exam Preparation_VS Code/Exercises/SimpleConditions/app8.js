function metricConverter([arg1, arg2, arg3]) {
    let num = Number(arg1);
    let convertToMetres = arg2;
    let convertTo = arg3;
    if (convertToMetres == "mm") {
        num /= 1000;
    } else if (convertToMetres == "cm") {
        num /= 100;
    } else if (convertToMetres == "mi") {
        num /= 0.000621371192;
    } else if (convertToMetres == "in") {
        num /= 39.3700787;
    } else if (convertToMetres == "km") {
        num /= 0.001;
    } else if (convertToMetres == "ft") {
        num /= 3.2808399;
    } else if (convertToMetres == "yd") {
        num /= 1.0936133;
    }
    if (convertTo == "mm") {
        num *= 1000;
    } else if (convertTo == "cm") {
        num *= 100;
    } else if (convertTo == "mi") {
        num *= 0.000621371192;
    } else if (convertTo == "in") {
        num *= 39.3700787;
    } else if (convertTo == "km") {
        num *= 0.001;
    } else if (convertTo == "ft") {
        num *= 3.2808399;
    } else if (convertTo == "yd") {
        num *= 1.0936133;
    }
    console.log(`${num.toFixed(8)} ${convertTo}`);
}
metricConverter(["12", "km", "ft"]);
// metricConverter(["150", "mi", "in"]);
// metricConverter(["450", "yd", "km"]);