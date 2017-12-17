function vacation([arg1, arg2]) {
    let budget = Number(arg1);
    let season = arg2.toLowerCase();
    let location = "";
    let overnight = "";
    if (budget >= 10 && budget <= 10000) {
        if (budget <= 1000) {
            overnight = "Camp";
            if (season == "summer") {
                location = "Alaska";
                budget *= 0.65;
            } else if (season == "winter") {
                location = "Morocco";
                budget *= 0.45;
            }
        } else if (budget > 1000 && budget <= 3000) {
            overnight = "Hut";
            if (season == "summer") {
                location = "Alaska";
                budget *= 0.80;
            } else if (season == "winter") {
                location = "Morocco";
                budget *= 0.60;
            }
        } else if (budget > 3000) {
            overnight = "Hotel";
            if (season == "summer") {
                location = "Alaska";
                budget *= 0.90;
            } else if (season == "winter") {
                location = "Morocco";
                budget *= 0.90;
            }
        }
        console.log(`${location} - ${overnight} - ${budget.toFixed(2)}`);
    }
}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);