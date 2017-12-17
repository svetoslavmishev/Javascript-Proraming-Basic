function metricConverter([arg1, arg2, arg3]) {
    let distance = Number(arg1);
    let fromDist = arg2;
    let toDist = arg3;
    if (fromDist == "mm") {
        distance = distance / 1000;
    }
    if (fromDist == "cm") {
        distance = distance / 100;
    }
    if (fromDist == "mi") {
        distance = distance / 0.000621371192;
    }
    if (fromDist == "in") {
        distance = distance / 39.3700787;
    }
    if (fromDist == "km") {
        distance = distance / 0.001;
    }
    if (fromDist == "ft") {
        distance = distance / 3.2808399;
    }
    if (fromDist == "yd") {
        distance = distance / 1.0936133;
    }
    if (toDist == "mm") {
        distance = distance * 1000;
    }
    if (toDist == "cm") {
        distance = distance * 100;
    }
    if (toDist == "mi") {
        distance = distance * 0.000621371192;
    }
    if (toDist == "in") {
        distance = distance * 39.3700787;
    }
    if (toDist == "km") {
        distance = distance * 0.001;
    }
    if (toDist == "ft") {
        distance = distance * 3.2808399;
    }
    if (toDist == "yd") {
        distance = distance * 1.0936133;
    }
    console.log(distance.toFixed(8) + " " + toDist);
}
metricConverter([12, "km", "ft"]);
metricConverter([150, "mi", "in"]);
metricConverter([450, "yd", "km"]);