function timeTo15Minutes([arg1, arg2]) {
    let hours = Number(arg1);
    let minutes = Number(arg2);
    let addMinutes = minutes + 15;
    if (addMinutes > 59) {
        addMinutes = (addMinutes - 60);
        hours = 1 + hours;
    }
    if (addMinutes <= 9) {
        addMinutes = "0" + addMinutes;
    }
    if (hours > 23) {
        hours = hours - 24;
    }
    console.log(hours + ":" + addMinutes); // `${}`
}
timeTo15Minutes(["1", "46"]);
timeTo15Minutes(["0", "01"]);
timeTo15Minutes(["23", "59"]);
timeTo15Minutes(["11", "08"]);
timeTo15Minutes(["12", "49"]);