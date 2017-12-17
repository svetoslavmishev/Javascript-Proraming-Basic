function workingHours([arg1, arg2, arg3]) {
    let neededHours = parseInt(arg1);
    let numberWorkers = parseInt(arg2);
    let workingDays = parseInt(arg3);
    let workingHours = numberWorkers * workingDays * 8;
    let penalties = (neededHours - workingHours) * workingDays;
    let overtime = neededHours - workingHours;
    if (workingHours >= neededHours) {
        console.log(`${workingHours - neededHours} hours left`);
    } else {        
        console.log(`${overtime} overtime`);
        console.log(`Penalties: ${penalties}`);
    }
}
workingHours(["0", "10", "20"]);
workingHours(["2000", "10", "20"]);