function worldRecord([arg1, arg2, arg3]) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let seconds = Number(arg3);
    let swimmingSeconds = distance * seconds;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalSwimmingTime = swimmingSeconds + delay;
    if (totalSwimmingTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(swimmingSeconds + delay).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSwimmingTime - record).toFixed(2)} seconds slower.`);
    }
}
worldRecord(["10464", "1500", "20"]);
worldRecord(["55555.67", "3017", "5.03"]);
