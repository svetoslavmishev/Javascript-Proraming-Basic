function finalCompetition([arg1, arg2, arg3, arg4]) {
    let numberOfDancers = Number(arg1);
    let numberOfPoints = Number(arg2);
    let season = arg3;
    let location = arg4;
    let award = 0;

    if (location == "Bulgaria") {
        award = numberOfDancers * numberOfPoints;
    } else {
        award = (numberOfDancers * numberOfPoints) * 1.5;
    }
    if (season == "summer" && location == "Bulgaria") {
        award = award - award * 0.05;
    } else if (season == "winter" && location == "Bulgaria") {
        award = award - award * 0.08;
    }
    else if (season == "summer" && location == "Abroad") {
        award = award - award * 0.10;
    }
    else if (season == "winter" && location == "Abroad") {
        award = award - award * 0.15;
    }
    let charity = award * 0.75;
    let leftMoney = award - charity;
    let moneyForDancers = leftMoney / numberOfDancers;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);
}
finalCompetition(["1", "89.5", "summer", "Abroad"]);
finalCompetition(["25", "98", "winter", "Bulgaria"]);