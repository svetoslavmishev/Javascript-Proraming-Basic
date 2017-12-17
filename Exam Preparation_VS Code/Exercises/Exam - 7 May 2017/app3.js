function schoolCamp([arg1, arg2, arg3, arg4]) {
    let season = arg1.toLowerCase();
    let group = arg2.toLowerCase();
    let numberStudent = parseInt(arg3);
    let numberNights = parseInt(arg4);
    let pricePerNight = 0;
    let sport = "";
    if (numberNights > 0 && numberNights <= 100 && numberStudent > 0 && numberStudent <= 10000) {
        if (season == "winter") {
            if (group == "boys") {
                pricePerNight += 9.60;
                sport = "Judo";
            } else if (group == "girls") {
                pricePerNight += 9.60;
                sport = "Gymnastics";
            } else if (group == "mixed") {
                pricePerNight += 10;
                sport = "Ski";
            }
        } else if (season == "spring") {
            if (group == "boys") {
                pricePerNight += 7.20;
                sport = "Tennis";
            } else if (group == "girls") {
                pricePerNight += 7.20;
                sport = "Athletics";
            } else if (group == "mixed") {
                pricePerNight += 9.50;
                sport = "Cycling";
            }
        } else if (season == "summer") {
            if (group == "boys") {
                pricePerNight += 15;
                sport = "Football";
            } else if (group == "girls") {
                pricePerNight += 15;
                sport = "Volleyball";
            } else if (group == "mixed") {
                pricePerNight += 20;
                sport = "Swimming";
            }
        }
        if (numberStudent < 10) {
            pricePerNight += 0;
        } else if (numberStudent < 20) {
            pricePerNight -= pricePerNight * 0.05;
        } else if (numberStudent < 50) {
            pricePerNight -= pricePerNight * 0.15;
        } else if (numberStudent >= 50) {
            pricePerNight = pricePerNight / 2;
        }
        let totalPriceForVacation = pricePerNight * numberNights * numberStudent;
        console.log(`${sport} ${totalPriceForVacation.toFixed(2)} lv.`);
    }
}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);