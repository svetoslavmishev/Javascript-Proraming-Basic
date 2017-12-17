function choreography([arg1, arg2, arg3]) {
    let steps = Number(arg1);
    let numberDancers = Number(arg2);
    let daysForLearning = Number(arg3);
    let percentStepsPerDay = Math.ceil((steps / daysForLearning) / steps * 100);
    if (percentStepsPerDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${(percentStepsPerDay / numberDancers).toFixed(2)}%.`);
    } else {
        console.log(`No, They will not succeed in that goal! Required ${(percentStepsPerDay / numberDancers).toFixed(2)}% steps to be learned per day.`);
    }
}
choreography(["10464", "20", "20"]);
choreography(["55555", "30", "7"]);